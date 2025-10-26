import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

const Header: React.FC = () => {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <BarChartIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div">
          Data Formulator MVP
        </Typography>
        <Box sx={{ ml: 'auto' }}>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            Simple Data Visualization Tool
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;