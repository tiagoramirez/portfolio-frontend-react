/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                primary: 'var(--color-bg-primary)',
                secondary: 'var(--color-bg-secondary)',
                btnPrimary: 'var(--color-btn-primary)',
                btnSecondary: 'var(--color-btn-secondary)',
            },
            textColor: {
                accent: 'var(--color-text-accent)',
                title: 'var(--color-text-title)',
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
            },
            borderColor: {
                primary: 'var(--color-border-primary)',
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
