import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { startLoginWithEmailPassword } from '../../../store/auth';

interface Inputs {
    email: string;
    password: string;
}

export const useLogin = () => {

    const dispatch = useAppDispatch();

    const { status } = useSelector((state: RootState) => state.auth);

    const { handleSubmit, register } = useForm<Inputs>();

    const onSubmitLogin: SubmitHandler<Inputs> = data => dispatch(startLoginWithEmailPassword({ email: data.email, password: data.password }));

    const onSubmit = handleSubmit(onSubmitLogin);

    return {
        status,
        register,
        onSubmit
    };
};