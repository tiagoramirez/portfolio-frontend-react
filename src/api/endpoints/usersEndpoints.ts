import { AxiosResponse } from 'axios';
import { ProfileInfo, User } from '../../modules/portfolio';
import { portfolioApi } from '../portfolioApi';

export const getUsers = async (page: number): Promise<AxiosResponse> => {
    import.meta.env.DEV && console.log(page);
    const getUsersEndpoint = `/User/page?number=${page}`;
    return await portfolioApi(false).get(getUsersEndpoint);
};

export const getUsersCount = async (): Promise<AxiosResponse<number>> => {
    const getUsersCountEndpoint = '/User/count';
    return await portfolioApi(false).get(getUsersCountEndpoint);
};

export const getIsUsernameAvailable = async (username: string): Promise<AxiosResponse<boolean>> => {
    import.meta.env.DEV && console.log(username);
    const getIsUsernameAvailableEndpoint = `/User/available?username=${username}`;
    return await portfolioApi(false).get(getIsUsernameAvailableEndpoint);
};

export const getUsername = async ({ id, email }: { id: string, email: string }): Promise<AxiosResponse<string>> => {
    import.meta.env.DEV && console.log({ id, email });
    const getUsernameEndpoint = `/User/username?email=${email}&id=${id}`;
    return await portfolioApi(false).get(getUsernameEndpoint);
};

export const getUser = async (username: string): Promise<AxiosResponse<User>> => {
    import.meta.env.DEV && console.log(username);
    const getUserEndpoint = `/User/${username}`;
    return await portfolioApi(false).get(getUserEndpoint);
};

export const putProfile = async (profileInfo: ProfileInfo): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(profileInfo);
    const putProfileEndpoint = '/User';
    return await portfolioApi(true).put(putProfileEndpoint, profileInfo);
};

export const deleteUser = async (): Promise<AxiosResponse<{ msg: string }>> => {
    const deleteUserEndpoint = '/User';
    return await portfolioApi(true).delete(deleteUserEndpoint);
};