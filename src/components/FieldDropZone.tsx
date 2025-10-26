import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { useDrop } from 'react-dnd';

interface FieldDropZoneProps {
  label: string;
  field: string;
  onFieldDrop: (field: string) => void;
  color: string;
}

const FieldDropZone: React.FC<FieldDropZoneProps> = ({ label, field, onFieldDrop, color }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'FIELD',
    drop: (item: { field: string }) => onFieldDrop(item.field),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleRemove = () => {
    onFieldDrop('');
  };

  return (
    <Box
      ref={drop}
      sx={{
        flex: 1,
        minWidth: '150px',
        p: 1.5,
        border: '2px dashed',
        borderColor: isOver ? 'primary.main' : 'grey.300',
        borderRadius: 1,
        bgcolor: isOver ? 'action.hover' : color,
        transition: 'all 0.2s',
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
        {label}
      </Typography>
      <Box sx={{ mt: 0.5, minHeight: '24px' }}>
        {field ? (
          <Chip label={field} size="small" onDelete={handleRemove} />
        ) : (
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Drop field here
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FieldDropZone;