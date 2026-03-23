
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log('React entry point loaded');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Failed to find the root element');
  throw new Error("Could not find root element to mount to");
}

console.log('Root element found, creating React root');
const root = ReactDOM.createRoot(rootElement);
console.log('React root created, rendering App');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log('App render called');
