export interface DataRow {
  [key: string]: string | number;
}

export interface ChartEncoding {
  x?: string;
  y?: string;
  color?: string;
}

export type ChartType = 'bar' | 'line' | 'scatter' | 'none';