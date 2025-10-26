import React, { useMemo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Vega } from 'react-vega';
import { DataRow, ChartType } from '../types';
import { createVegaLiteSpec } from '../utils/vegaSpecBuilder';

interface ChartViewProps {
  data: DataRow[];
  chartType: ChartType;
  xField: string;
  yField: string;
  colorField: string;
}

const ChartView: React.FC<ChartViewProps> = ({ data, chartType, xField, yField, colorField }) => {
  const spec = useMemo(() => {
    if (!xField || !yField || data.length === 0) {
      return null;
    }
    return createVegaLiteSpec(data, chartType, xField, yField, colorField);
  }, [data, chartType, xField, yField, colorField]);

  if (!spec) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'text.secondary',
        }}
      >
        <Typography variant="body2">
          {data.length === 0
            ? 'Load data to create visualizations'
            : 'Drag fields to X and Y encodings to create a chart'}
        </Typography>
      </Box>
    );
  }

  return (
    <Paper elevation={1} sx={{ p: 2, height: '100%', overflow: 'auto' }}>
      <Vega spec={spec} actions={false} />
    </Paper>
  );
};

export default ChartView;