import React, { useRef } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { DataRow } from '../types';
import { parseCSV } from '../utils/csvParser';

interface DataPanelProps {
  data: DataRow[];
  columns: string[];
  onDataLoad: (data: DataRow[], columns: string[]) => void;
}

const DataPanel: React.FC<DataPanelProps> = ({ data, columns, onDataLoad }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    const { data: parsedData, columns: parsedColumns } = parseCSV(text);
    onDataLoad(parsedData, parsedColumns);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box
      sx={{
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #e0e0e0',
        bgcolor: '#fafafa',
      }}
    >
      <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
        <Typography variant="h6" gutterBottom>
          Data
        </Typography>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <Button
          variant="contained"
          startIcon={<UploadFileIcon />}
          onClick={handleButtonClick}
          fullWidth
        >
          Load CSV File
        </Button>
      </Box>

      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        {data.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'text.secondary',
            }}
          >
            <Typography variant="body2">Load a CSV file to get started</Typography>
          </Box>
        ) : (
          <TableContainer component={Paper} elevation={0}>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell key={col} sx={{ fontWeight: 'bold', bgcolor: '#f5f5f5' }}>
                      {col}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(0, 100).map((row, idx) => (
                  <TableRow key={idx} hover>
                    {columns.map((col) => (
                      <TableCell key={col}>{row[col]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
};

export default DataPanel;