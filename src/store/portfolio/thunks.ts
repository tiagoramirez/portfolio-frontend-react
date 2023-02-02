import { AxiosError } from 'axios';
import { portfolioApi } from '../../api';
import { User } from '../../modules/portfolio/models';
import { AppDispatch } from '../types';
import { errorLoadingApi, setActiveUser, setLoading, setTotalUsers, setUsers } from './portfolioSlice';

export const startGettingUsers = (page = 0) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setLoading());
        const usersEndpoint = '/user';
        try {
            const { data: users } = await portfolioApi.get(usersEndpoint);
            return dispatch(setUsers(users));
        }
        catch (err: unknown) {
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(errorLoadingApi(msg));
            }
            else {
                const msg = error.message;
                return dispatch(errorLoadingApi(msg));
            }
        }
    };
};

export const startGettingUsersCount = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(setLoading());
        const usersCountEndpoint = '/user?count=1';
        try {
            const { data: count } = await portfolioApi.get<number>(usersCountEndpoint);
            return dispatch(setTotalUsers(count));
        } catch (err: unknown) {
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                return dispatch(errorLoadingApi(msg));
            }
            else {
                const msg = error.message;
                return dispatch(errorLoadingApi(msg));
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
                return dispatch(errorLoadingApi(msg));
            }
            else {
                const msg = error.message;
                return dispatch(errorLoadingApi(msg));
            }
        }
    };
};