import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from './components/Header';
import DataPanel from './components/DataPanel';
import ChartPanel from './components/ChartPanel';
import { DataRow } from './types';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

const App: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  const handleDataLoad = (newData: DataRow[], newColumns: string[]) => {
    setData(newData);
    setColumns(newColumns);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Header />
          <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            <DataPanel data={data} columns={columns} onDataLoad={handleDataLoad} />
            <ChartPanel data={data} columns={columns} />
          </Box>
        </Box>
      </DndProvider>
    </ThemeProvider>
  );
};

export default App;