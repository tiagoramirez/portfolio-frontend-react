import axios from 'axios';

export const portfolioApi = axios.create({
    baseURL: 'https://localhost:7293/API'
    // baseURL: 'https://tiagoramirez-portfolio.azurewebsites.net/API'
});