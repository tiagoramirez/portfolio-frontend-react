import { AxiosResponse } from 'axios';
import { portfolioApi } from '../../../api';
import { Education, User } from '../../../modules/portfolio';

export const getUsersCount = async (): Promise<AxiosResponse<number>> => {
    const usersCountEndpoint = '/user?count=1';
    return await portfolioApi.get(usersCountEndpoint);
};

export const getUsers = async (page: number): Promise<AxiosResponse> => {
    const usersEndpoint = '/user';
    return await portfolioApi.get(usersEndpoint);
};

export const getUser = async (username: string): Promise<AxiosResponse<User>> => {
    const endpoint = `/user/${username}`;
    return await portfolioApi.get(endpoint);
};

export const postEducation = async (education: Education): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    const postEducationEndpoint = '/education';
    return await portfolioApi.post(postEducationEndpoint, education);
};

export const putEducation = async (education: Education, id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const putEducationEndpoint = `/education/${id}`;
    return await portfolioApi.put(putEducationEndpoint, education);
};