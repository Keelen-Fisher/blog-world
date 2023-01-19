import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React does additional tests with this line of code.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


