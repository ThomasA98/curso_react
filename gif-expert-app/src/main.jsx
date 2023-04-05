import React from 'react';
import ReactDOM from 'react-dom/client';

//pages
import { GifExpertApp } from './pages';

//utilities
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);