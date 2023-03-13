/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                primary: 'var(--color-bg-primary)',
                secondary: 'var(--color-bg-secondary)',
                btn: 'var(--color-btn)',
                input: 'var(--color-input)',
            },
            textColor: {
                accent: 'var(--color-text-accent)',
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
            },
            borderColor: {
                primary: 'var(--color-border-primary)',
                secondary: 'var(--color-border-secondary)',
            },
            boxShadowColor:{
                primary:'var(--color-shadow-primary)'
            },
            placeholderColor:{
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
            }
        },
    },
    plugins: [],
    darkMode: 'class',
};
