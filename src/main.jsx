import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind CSS
import 'preline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Initialize Preline
document.addEventListener('DOMContentLoaded', () => {
  import('preline/preline').then(({ initFlowbite }) => {
    initFlowbite();
  });
});
