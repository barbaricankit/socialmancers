import React from 'react';
import './App.css';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Feeds } from './feeds';
import { Compose } from './compose';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Box>
          <Compose />
          <Feeds />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
