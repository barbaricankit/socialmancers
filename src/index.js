import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TweetProvider } from './context';

ReactDOM.render(
  <StrictMode>
    <TweetProvider>
      <ColorModeScript />
      <App />
    </TweetProvider>
  </StrictMode>,
  document.getElementById('root')
);
