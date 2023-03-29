import { AxiosError } from 'axios';

export const handleAxiosError = (err: unknown): string => {
    if (import.meta.env.DEV) {
        console.error('Error de Axios: ');
        console.error(err);
    }
    const error = err as AxiosError;
    if (error.response) {
        const { msg } = error.response.data as { msg: string };
        return msg;
    }
    else {
        const msg = error.message;
        return msg;
    }
};