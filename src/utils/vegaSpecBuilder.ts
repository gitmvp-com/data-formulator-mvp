import { DataRow, ChartType } from '../types';

export function createVegaLiteSpec(
  data: DataRow[],
  chartType: ChartType,
  xField: string,
  yField: string,
  colorField?: string
): any {
  const baseSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple chart',
    data: { values: data },
    width: 600,
    height: 400,
    encoding: {
      x: {
        field: xField,
        type: inferType(data, xField),
        axis: { title: xField },
      },
      y: {
        field: yField,
        type: inferType(data, yField),
        axis: { title: yField },
      },
    },
  };

  // Add color encoding if specified
  if (colorField) {
    (baseSpec.encoding as any).color = {
      field: colorField,
      type: inferType(data, colorField),
    };
  }

  // Set mark type based on chart type
  let mark: any;
  switch (chartType) {
    case 'bar':
      mark = { type: 'bar' };
      break;
    case 'line':
      mark = { type: 'line', point: true };
      break;
    case 'scatter':
      mark = { type: 'point', filled: true };
      break;
    default:
      mark = { type: 'bar' };
  }

  return {
    ...baseSpec,
    mark,
  };
}

function inferType(data: DataRow[], field: string): 'quantitative' | 'nominal' | 'temporal' {
  if (data.length === 0) return 'nominal';
  
  const firstValue = data[0][field];
  
  if (typeof firstValue === 'number') {
    return 'quantitative';
  }
  
  // Check if it's a date
  if (typeof firstValue === 'string' && !isNaN(Date.parse(firstValue))) {
    return 'temporal';
  }
  
  return 'nominal';
}