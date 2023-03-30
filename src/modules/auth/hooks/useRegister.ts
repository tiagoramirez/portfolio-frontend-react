import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { startRegisterUserBackend, startRegisterUserFirebase, StatusType } from '../../../store/auth';

interface Inputs {
    name: string;
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export const useRegister = () => {
    const dispatch = useAppDispatch();

    const { status, id } = useSelector((state: RootState) => state.auth);

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmitRegister: SubmitHandler<Inputs> = async (data) => {
        const { email, name, password, repeatPassword, username } = data;
        if (name.length < 4) return toast.error('Nombre debe ser de 4 o mas caracteres.');
        if (username.length < 4) return toast.error('Usuario debe ser de 4 o mas caracteres.');
        if (status == StatusType.NOT_REGISTERED) return dispatch(startRegisterUserBackend({ id, email, username, name }));
        if (password !== repeatPassword) return toast.error('Las contraseñas no coinciden.');
        return await dispatch(startRegisterUserFirebase({ email, username, name, password }));
    };

    const onSubmit = handleSubmit(onSubmitRegister);

    return {
        status,
        register,
        onSubmit
    };
};