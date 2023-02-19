import { AxiosError } from 'axios';
import Swal from 'sweetalert2';
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
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                await Swal.fire({
                    title: 'Portfolio',
                    text: msg,
                    icon: 'error',
                    confirmButtonText: 'Recargar pagina'
                });
                window.location.reload();
            }
            else {
                const msg = error.message;
                await Swal.fire({
                    title: 'Portfolio',
                    text: msg,
                    icon: 'error',
                    confirmButtonText: 'Recargar pagina'
                });
                window.location.reload();
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
            const error = err as AxiosError;
            if (error.response) {
                const { msg } = error.response.data as { msg: string };
                await Swal.fire({
                    title: 'Portfolio',
                    text: msg,
                    icon: 'error',
                    confirmButtonText: 'Recargar pagina'
                });
                window.location.reload();
            }
            else {
                const msg = error.message;
                await Swal.fire({
                    title: 'Portfolio',
                    text: msg,
                    icon: 'error',
                    confirmButtonText: 'Recargar pagina'
                });
                window.location.reload();
            }
        }
    };
};