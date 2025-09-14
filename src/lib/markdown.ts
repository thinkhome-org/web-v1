import { promises as fs } from 'fs';
import path from 'path';

export async function getMarkdownContent(filename: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'app', 'legal', filename);
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading markdown file ${filename}:`, error);
    throw new Error(`Could not read markdown file: ${filename}`);
  }
}

export function getMarkdownFilename(slug: string): string {
  const filenameMap: Record<string, string> = {
    'privacy-policy': 'privacy-policy.md',
    'terms-of-service': 'terms-of-service.md',
    'cookies': 'cookies.md',
  };
  
  return filenameMap[slug] || `${slug}.md`;
}