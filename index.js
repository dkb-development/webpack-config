import React from 'react';
import './index.css';
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);