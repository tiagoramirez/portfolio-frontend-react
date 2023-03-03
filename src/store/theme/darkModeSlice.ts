import { createSlice } from '@reduxjs/toolkit';

export interface DarkModeState {
    isDarkMode: boolean
}

const initialState: DarkModeState = {
    isDarkMode: true
};

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        setDarkMode: (state) => {
            state.isDarkMode = true;
            const root = window.document.documentElement;
            root.classList.remove('light');
            root.classList.add('dark');
        },
        setLightMode: (state) => {
            state.isDarkMode = false;
            const root = window.document.documentElement;
            root.classList.remove('dark');
            root.classList.add('light');
        }
    }
});

export const { setDarkMode, setLightMode } = darkModeSlice.actions;