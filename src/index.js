import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes></Routes>
    </BrowserRouter>
);


