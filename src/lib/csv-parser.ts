/**
 * CSV Parser Utility
 * 
 * Handles CSV parsing with proper quote handling and type safety.
 * Replaces custom CSV parsing logic with a more robust solution.
 */

export interface CSVParseOptions {
  /** Whether to skip empty lines */
  skipEmptyLines?: boolean;
  /** Custom delimiter (default: ',') */
  delimiter?: string;
  /** Whether to trim whitespace from values */
  trim?: boolean;
}

export interface CSVParseResult<T = Record<string, string>> {
  /** Parsed data as array of objects */
  data: T[];
  /** Column headers */
  headers: string[];
  /** Number of rows parsed */
  rowCount: number;
}

/**
 * Parses CSV content into structured data
 * 
 * @param csvContent - Raw CSV string content
 * @param options - Parsing options
 * @returns Parsed CSV data with metadata
 * 
 * @example
 * ```typescript
 * const csv = "name,age,email\nJohn,30,john@example.com\nJane,25,jane@example.com";
 * const result = parseCSV(csv);
 * console.log(result.data); // [{ name: "John", age: "30", email: "john@example.com" }, ...]
 * ```
 */
export function parseCSV<T = Record<string, string>>(
  csvContent: string,
  options: CSVParseOptions = {}
): CSVParseResult<T> {
  const {
    skipEmptyLines = true,
    delimiter = ',',
    trim = true
  } = options;

  // Split content into lines and filter empty ones if needed
  const lines = csvContent
    .split('\n')
    .map(line => trim ? line.trim() : line)
    .filter(line => !skipEmptyLines || line.length > 0);

  if (lines.length === 0) {
    return {
      data: [],
      headers: [],
      rowCount: 0
    };
  }

  // Parse headers
  const headers = parseCSVLine(lines[0], delimiter, trim);
  
  // Parse data rows
  const data: T[] = lines.slice(1).map(line => {
    const values = parseCSVLine(line, delimiter, trim);
    const row: any = {};
    
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    return row as T;
  });

  return {
    data,
    headers,
    rowCount: data.length
  };
}

/**
 * Parses a single CSV line with proper quote handling
 * 
 * @param line - CSV line to parse
 * @param delimiter - Field delimiter
 * @param trim - Whether to trim values
 * @returns Array of parsed values
 */
function parseCSVLine(line: string, delimiter: string, trim: boolean): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      values.push(trim ? current.trim() : current);
      current = '';
    } else {
      current += char;
    }
  }
  
  // Add the last value
  values.push(trim ? current.trim() : current);
  
  return values;
}

/**
 * Maps CSV headers to object properties
 * 
 * @param headers - Array of CSV headers
 * @param mapping - Mapping object from CSV header to object property
 * @returns Mapped headers array
 * 
 * @example
 * ```typescript
 * const headers = ['jmeno', 'email', 'role'];
 * const mapping = { 'jmeno': 'name', 'email': 'email', 'role': 'role' };
 * const mapped = mapHeaders(headers, mapping);
 * // Result: ['name', 'email', 'role']
 * ```
 */
export function mapHeaders(
  headers: string[],
  mapping: Record<string, string>
): string[] {
  return headers.map(header => 
    mapping[header.toLowerCase()] || header.toLowerCase()
  );
}
