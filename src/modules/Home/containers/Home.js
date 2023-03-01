import React, { Component } from 'react';

import { Box, Button, Container, Typography } from '@mui/material';
import { BlogPost, Download } from '../components';
import { NavBar } from '../../NavBar/containers/NavBar';

const Home = () => {
  return (
    <Box>
      <Container>
        <NavBar />
        <BlogPost />
      </Container>
    </Box>
  );
};
export default Home;
