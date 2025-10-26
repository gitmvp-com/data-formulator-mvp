import React, { useState } from 'react';
import { Box, Paper, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { DataRow, ChartType } from '../types';
import EncodingShelf from './EncodingShelf';
import ChartView from './ChartView';

interface ChartPanelProps {
  data: DataRow[];
  columns: string[];
}

const ChartPanel: React.FC<ChartPanelProps> = ({ data, columns }) => {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [xField, setXField] = useState<string>('');
  const [yField, setYField] = useState<string>('');
  const [colorField, setColorField] = useState<string>('');

  const handleChartTypeChange = (_: React.MouseEvent<HTMLElement>, newType: ChartType | null) => {
    if (newType) setChartType(newType);
  };

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
        <Typography variant="h6" gutterBottom>
          Visualization
        </Typography>
        <ToggleButtonGroup
          value={chartType}
          exclusive
          onChange={handleChartTypeChange}
          size="small"
          fullWidth
        >
          <ToggleButton value="bar">
            <BarChartIcon sx={{ mr: 1 }} />
            Bar
          </ToggleButton>
          <ToggleButton value="line">
            <ShowChartIcon sx={{ mr: 1 }} />
            Line
          </ToggleButton>
          <ToggleButton value="scatter">
            <ScatterPlotIcon sx={{ mr: 1 }} />
            Scatter
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <EncodingShelf
        columns={columns}
        xField={xField}
        yField={yField}
        colorField={colorField}
        onXFieldChange={setXField}
        onYFieldChange={setYField}
        onColorFieldChange={setColorField}
      />

      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        <ChartView
          data={data}
          chartType={chartType}
          xField={xField}
          yField={yField}
          colorField={colorField}
        />
      </Box>
    </Box>
  );
};

export default ChartPanel;