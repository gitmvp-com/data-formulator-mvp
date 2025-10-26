import React from 'react';
import { Chip } from '@mui/material';
import { useDrag } from 'react-dnd';

interface FieldChipProps {
  field: string;
}

const FieldChip: React.FC<FieldChipProps> = ({ field }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FIELD',
    item: { field },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Chip
      ref={drag}
      label={field}
      size="small"
      sx={{
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
        '&:hover': {
          backgroundColor: '#e0e0e0',
        },
      }}
    />
  );
};

export default FieldChip;