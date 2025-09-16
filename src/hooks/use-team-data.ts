/**
 * Team Data Hook
 * 
 * Custom hook for loading and managing team member data from CSV.
 * Provides loading states, error handling, and data transformation.
 */

import { useState, useEffect } from 'react';
import { parseCSV, mapHeaders } from '@/lib/csv-parser';
import type { TeamMember } from '@/components/ui/team-member-card';

export interface UseTeamDataOptions {
  /** CSV file path */
  csvPath?: string;
  /** Header mapping for CSV columns */
  headerMapping?: Record<string, string>;
  /** Whether to enable auto-refresh */
  autoRefresh?: boolean;
  /** Refresh interval in milliseconds */
  refreshInterval?: number;
}

export interface UseTeamDataReturn {
  /** Array of team members */
  teamMembers: TeamMember[];
  /** Loading state */
  loading: boolean;
  /** Error state */
  error: string | null;
  /** Number of team members loaded */
  count: number;
  /** Function to manually refresh data */
  refresh: () => Promise<void>;
  /** Function to clear error state */
  clearError: () => void;
}

/**
 * Default header mapping for team CSV
 */
const DEFAULT_HEADER_MAPPING: Record<string, string> = {
  'jmeno': 'name',
  'email': 'email',
  'role': 'role',
  'popis': 'description',
  'telefon': 'phone',
  'foto': 'photo_location',
  'tag': 'tag',
  'oddeleni': 'department'
};

/**
 * Hook for loading and managing team data
 * 
 * @param options - Configuration options
 * @returns Team data and management functions
 * 
 * @example
 * ```typescript
 * const { teamMembers, loading, error, refresh } = useTeamData({
 *   csvPath: '/team/source.csv',
 *   autoRefresh: true,
 *   refreshInterval: 30000
 * });
 * ```
 */
export function useTeamData(options: UseTeamDataOptions = {}): UseTeamDataReturn {
  const {
    csvPath = '/team/source.csv',
    headerMapping = DEFAULT_HEADER_MAPPING,
    autoRefresh = false,
    refreshInterval = 30000
  } = options;

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Loads team data from CSV file
   */
  const loadTeamData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      // Fetch CSV content
      const response = await fetch(csvPath);
      
      if (!response.ok) {
        throw new Error(`Failed to load team data: ${response.status} ${response.statusText}`);
      }

      const csvContent = await response.text();
      
      // Parse CSV data
      const { data, headers } = parseCSV(csvContent);
      
      // Map headers if mapping is provided
      const mappedHeaders = mapHeaders(headers, headerMapping);
      
      // Transform data to TeamMember format
      const members: TeamMember[] = data.map((row: any) => {
        const member: any = {};
        
        mappedHeaders.forEach((mappedHeader, index) => {
          member[mappedHeader] = row[headers[index]] || '';
        });
        
        return member as TeamMember;
      });

      setTeamMembers(members);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Error loading team data:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Clears error state
   */
  const clearError = (): void => {
    setError(null);
  };

  // Load data on mount
  useEffect(() => {
    loadTeamData();
  }, [csvPath, headerMapping]);

  // Auto-refresh if enabled
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      loadTeamData();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval]);

  return {
    teamMembers,
    loading,
    error,
    count: teamMembers.length,
    refresh: loadTeamData,
    clearError
  };
}
