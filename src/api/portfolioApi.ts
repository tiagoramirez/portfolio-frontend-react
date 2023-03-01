import axios from 'axios';

export const portfolioApi =
    localStorage.getItem('AUTH_TKN')
        ?
        axios.create({
            // baseURL: 'https://localhost:7293/API',
            baseURL: 'https://tiagoramirez-portfolio.azurewebsites.net/API',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('AUTH_TKN')}` }
        })
        :
        axios.create({
            // baseURL: 'https://localhost:7293/API',
            baseURL: 'https://tiagoramirez-portfolio.azurewebsites.net/API'
        });