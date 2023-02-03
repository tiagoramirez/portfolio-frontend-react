import { AxiosError, AxiosResponse } from 'axios';
import { portfolioApi } from '../../api';
import { User } from '../../modules/portfolio';
import { AppDispatch } from '../types';
import {  setActiveUser, setError, setLoading, setTotalUsers, setUsers } from './portfolioSlice';

const getUsersCount = async (): Promise<AxiosResponse<number>> => {
    const usersCountEndpoint = '/user?count=1';
    return await portfolioApi.get<number>(usersCountEndpoint);
};

const getUsers = async (page: number): Promise<AxiosResponse> => {
    const usersEndpoint = '/user';
    return await portfolioApi.get(usersEndpoint);
};

export const startGettingUsers = (page = 0) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setLoading());        
        try {
            const { data: count } = await getUsersCount();
            dispatch(setTotalUsers(count));
            
            const { data: users } = await getUsers(page);
            dispatch(setUsers(users));

        } catch (err: unknown) {
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(setError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(setError(msg));
            }
        }
    };
};

export const startGettingActiveUser = (username: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setLoading());
        const endpoint = `/user/${username}`;
        try {
            const { data: user } = await portfolioApi.get<User>(endpoint);
            return dispatch(setActiveUser(user));
        } catch (err: unknown) {
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(setError(msg));
            }
            else {
                const msg = error.message;
                return dispatch(setError(msg));
            }
        }
    };
};