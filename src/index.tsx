import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient(); // so we can use react-query in our app

ReactDOM.render(
  <QueryClientProvider client = {client}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

