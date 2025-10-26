import { DataRow } from '../types';

export function parseCSV(csvText: string): { data: DataRow[]; columns: string[] } {
  const lines = csvText.trim().split('\n');
  if (lines.length === 0) {
    return { data: [], columns: [] };
  }

  // Parse header
  const columns = lines[0].split(',').map((col) => col.trim());

  // Parse data rows
  const data: DataRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map((val) => val.trim());
    const row: DataRow = {};
    
    columns.forEach((col, idx) => {
      const value = values[idx];
      // Try to parse as number, otherwise keep as string
      const numValue = parseFloat(value);
      row[col] = isNaN(numValue) ? value : numValue;
    });
    
    data.push(row);
  }

  return { data, columns };
}