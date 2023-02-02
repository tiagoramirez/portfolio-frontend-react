import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { darkModeSlice } from './theme';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        darkMode: darkModeSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});