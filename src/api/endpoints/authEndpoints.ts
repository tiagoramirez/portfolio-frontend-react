import { AxiosInstance, AxiosResponse } from 'axios';

export const registerUserBackend = async (params: { id: string, email: string, username: string, name: string }, portfolioApi: AxiosInstance): Promise<AxiosResponse<string>> => {
    const registerUserEndpoint = '/Auth/Register';
    return await portfolioApi.post(registerUserEndpoint, params);
};

export const getUsername = async ({ id, email }: { id: string, email: string }, portfolioApi: AxiosInstance): Promise<AxiosResponse<string>> => {
    const getUsernameEndpoint = `/User?email=${email}&id=${id}`;
    return await portfolioApi.get(getUsernameEndpoint);
};

export const getIsRegistered = async ({ id, email }: { id: string, email: string }, portfolioApi: AxiosInstance): Promise<AxiosResponse<boolean>> => {
    const isRegisteredBackendEndpoint = `/Auth/Registered?email=${email}&id=${id}`;
    return await portfolioApi.get(isRegisteredBackendEndpoint);
};

export const getTokenLogin = async ({ id, username, email }: { id: string, username: string, email: string }, portfolioApi: AxiosInstance): Promise<AxiosResponse<string>> => {
    const tokenLoginEndpoint = `/Auth/Login?email=${email}&id=${id}&username=${username}`;
    return await portfolioApi.get(tokenLoginEndpoint);
};

export const getIsUsernameAvailable = async (username: string, portfolioApi: AxiosInstance): Promise<AxiosResponse<boolean>> => {
    const isUsernameAvailableEndpoint = `/User?available=${username}`;
    return await portfolioApi.get(isUsernameAvailableEndpoint);
};