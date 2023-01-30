import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import { TodoProvider } from "./contexto/Contexto";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <TodoProvider>
      <App/>
    </TodoProvider>
  </QueryClientProvider>
);