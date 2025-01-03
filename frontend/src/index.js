import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/App.module.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
