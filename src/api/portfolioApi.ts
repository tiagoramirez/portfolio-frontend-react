import axios, { AxiosInstance } from 'axios';

export const portfolioApi = (requiresAuth: boolean): AxiosInstance =>
    requiresAuth
        ?
        axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: { 'Authorization': `Bearer ${localStorage.getItem('AUTH_TKN')}` }
        })
        :
        axios.create({
            baseURL: import.meta.env.VITE_API_URL,
        });