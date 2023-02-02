import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { PortfolioApp } from './PortfolioApp';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <PortfolioApp />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
