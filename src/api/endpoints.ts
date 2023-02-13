import { AxiosResponse } from 'axios';
import { Education, User } from '../modules/portfolio';
import { portfolioApi } from './portfolioApi';

export const registerUserBackend = async (params: { id: string, email: string, username: string, name: string }): Promise<AxiosResponse<string>> => {
    const registerUserEndpoint = '/Auth/Register';
    return await portfolioApi.post<string>(registerUserEndpoint, params);
};

export const getUsername = async ({ id, email }: { id: string, email: string }): Promise<AxiosResponse<string>> => {
    const getUsernameEndpoint = `/User?email=${email}&id=${id}`;
    return await portfolioApi.get<string>(getUsernameEndpoint);
};

export const getIsRegistered = async ({ id, email }: { id: string, email: string }): Promise<AxiosResponse<boolean>> => {
    const isRegisteredBackendEndpoint = `/Auth/Registered?email=${email}&id=${id}`;
    return await portfolioApi.get<boolean>(isRegisteredBackendEndpoint);
};

export const getTokenLogin = async ({ id, username, email }: { id: string, username: string, email: string }): Promise<AxiosResponse<string>> => {
    const tokenLoginEndpoint = `/Auth/Login?email=${email}&id=${id}&username=${username}`;
    return await portfolioApi.get<string>(tokenLoginEndpoint);
};

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

export const deleteEducation = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    const deleteEducationEndpoint = `/education/${id}`;
    return await portfolioApi.delete(deleteEducationEndpoint);
};