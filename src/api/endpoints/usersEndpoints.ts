import { AxiosResponse } from 'axios';
import { User } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const getUsersCount = async (): Promise<AxiosResponse<number>> => {
    const usersCountEndpoint = '/user?count=1';
    return await portfolioApi(false).get(usersCountEndpoint);
};

export const getUsers = async (page: number): Promise<AxiosResponse> => {
    const usersEndpoint = '/user';
    return await portfolioApi(false).get(usersEndpoint);
};

export const getUser = async (username: string): Promise<AxiosResponse<User>> => {
    const endpoint = `/user/${username}`;
    return await portfolioApi(false).get(endpoint);
};