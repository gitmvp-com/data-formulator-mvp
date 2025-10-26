import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import FieldDropZone from './FieldDropZone';
import FieldChip from './FieldChip';

interface EncodingShelfProps {
  columns: string[];
  xField: string;
  yField: string;
  colorField: string;
  onXFieldChange: (field: string) => void;
  onYFieldChange: (field: string) => void;
  onColorFieldChange: (field: string) => void;
}

const EncodingShelf: React.FC<EncodingShelfProps> = ({
  columns,
  xField,
  yField,
  colorField,
  onXFieldChange,
  onYFieldChange,
  onColorFieldChange,
}) => {
  return (
    <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Encoding Shelf
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', width: '100%' }}>
          Available Fields:
        </Typography>
        {columns.map((col) => (
          <FieldChip key={col} field={col} />
        ))}
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <FieldDropZone
          label="X"
          field={xField}
          onFieldDrop={onXFieldChange}
          color="#e3f2fd"
        />
        <FieldDropZone
          label="Y"
          field={yField}
          onFieldDrop={onYFieldChange}
          color="#f3e5f5"
        />
        <FieldDropZone
          label="Color"
          field={colorField}
          onFieldDrop={onColorFieldChange}
          color="#fff3e0"
        />
      </Box>
    </Box>
  );
};

export default EncodingShelf;