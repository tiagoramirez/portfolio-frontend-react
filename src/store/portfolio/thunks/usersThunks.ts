import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { getUser, getUsers, getUsersCount } from '../../../api';
import { AppDispatch } from '../../types';
import { loading, setActiveUser, setTotalUsers, setUsers } from '../portfolioSlice';

export const startGettingUsers = (page = 0) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data: count } = await getUsersCount();
            dispatch(setTotalUsers(count));

            const { data: users } = await getUsers(page);
            return dispatch(setUsers(users));
        }
        catch (err: unknown) {
            console.error('Error de axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                toast.error(`${msg}\n\nRecarga la pagina o intentalo de nuevo mas tarde.`);
            }
            else {
                const msg = error.message;
                toast.error(`${msg}\n\nRecarga la pagina o intentalo de nuevo mas tarde.`);
            }
        }
    };
};

export const startGettingActiveUser = (username: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const { data: user } = await getUser(username);
            return dispatch(setActiveUser(user));
        }
        catch (err: unknown) {
            console.error('Error de axios: ');
            console.error(err);
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                toast.error(`${msg}\n\nRecarga la pagina o intentalo de nuevo mas tarde.`);
            }
            else {
                const msg = error.message;
                toast.error(`${msg}\n\nRecarga la pagina o intentalo de nuevo mas tarde.`);
            }
        }
    };
};