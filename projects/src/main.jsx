import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoitemsProvider } from './store/todo-items-store.jsx';

createRoot(document.getElementById('root')).render(
  <TodoitemsProvider>
    <App />
  </TodoitemsProvider>
);