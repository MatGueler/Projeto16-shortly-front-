import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Componets/App/App';
import './Assets/CSS/reset.css'
import './Assets/CSS/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
