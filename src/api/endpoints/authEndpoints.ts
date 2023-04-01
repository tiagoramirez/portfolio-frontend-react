import { AxiosResponse } from 'axios';
import { portfolioApi } from '../portfolioApi';

export const postRegister = async (params: { id: string, email: string, username: string, name: string }): Promise<AxiosResponse<string>> => {
    import.meta.env.DEV && console.log(params);
    const postRegisterEndpoint = '/Auth/Register';
    return await portfolioApi(false).post(postRegisterEndpoint, params);
};

export const getIsRegistered = async ({ id, email }: { id: string, email: string }): Promise<AxiosResponse<boolean>> => {
    import.meta.env.DEV && console.log({ id, email });
    const getIsRegisteredBackendEndpoint = `/Auth/Registered?email=${email}&id=${id}`;
    return await portfolioApi(false).get(getIsRegisteredBackendEndpoint);
};

export const postLogin = async (login: { id: string, username: string, email: string }): Promise<AxiosResponse<string>> => {
    import.meta.env.DEV && console.log(login);
    const postLoginEndpoint = '/Auth/Login';
    return await portfolioApi(false).post(postLoginEndpoint, login);
};