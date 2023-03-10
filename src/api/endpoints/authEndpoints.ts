import { AxiosResponse } from 'axios';
import { portfolioApi } from '../portfolioApi';

export const registerUserBackend = async (params: { id: string, email: string, username: string, name: string }): Promise<AxiosResponse<string>> => {
    const registerUserEndpoint = '/Auth/Register';
    return await portfolioApi(false).post(registerUserEndpoint, params);
};

export const getUsername = async ({ id, email }: { id: string, email: string }): Promise<AxiosResponse<string>> => {
    const getUsernameEndpoint = `/User?email=${email}&id=${id}`;
    return await portfolioApi(false).get(getUsernameEndpoint);
};

export const getIsRegistered = async ({ id, email }: { id: string, email: string }): Promise<AxiosResponse<boolean>> => {
    const isRegisteredBackendEndpoint = `/Auth/Registered?email=${email}&id=${id}`;
    return await portfolioApi(false).get(isRegisteredBackendEndpoint);
};

export const getTokenLogin = async ({ id, username, email }: { id: string, username: string, email: string }): Promise<AxiosResponse<string>> => {
    const tokenLoginEndpoint = `/Auth/Login?email=${email}&id=${id}&username=${username}`;
    return await portfolioApi(false).get(tokenLoginEndpoint);
};

export const getIsUsernameAvailable = async (username: string): Promise<AxiosResponse<boolean>> => {
    const isUsernameAvailableEndpoint = `/User?available=${username}`;
    return await portfolioApi(false).get(isUsernameAvailableEndpoint);
};