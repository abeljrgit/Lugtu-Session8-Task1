import React from 'react';
import { AppBar, Button, Container } from '@mui/material';
import Download from '../../Home/components/ExcelExport';

export const NavBar = () => {
  return (
    <AppBar>
      <Container sx={{ py: 2 }}>
        <Download />
      </Container>
    </AppBar>
  );
};
