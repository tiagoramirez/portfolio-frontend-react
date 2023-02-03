import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { portfolioSlice } from './portfolio';
import { darkModeSlice } from './theme';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        darkMode: darkModeSlice.reducer,
        portfolio: portfolioSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});