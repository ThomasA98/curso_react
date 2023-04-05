import React from 'react';
import { createRoot } from 'react-dom/client';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <MainApp />
</BrowserRouter>
);