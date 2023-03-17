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
                        className:'mt-10 border-2 border-primary bg-secondary text-secondary',
                        duration: 1250,
                        success: {
                            duration: 1250,
                        },
                    }}
                />
                <PortfolioApp />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
