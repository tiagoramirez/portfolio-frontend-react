import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { PortfolioApp } from './PortfolioApp';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <Toaster
                    toastOptions={{
                        duration: 5000,
                        style: {
                            background: 'var(--color-bg-primary)',
                            color: 'var(--color-text-primary)',
                        },
                        success: {
                            duration: 3000,
                        },
                    }}
                />
                <PortfolioApp />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
