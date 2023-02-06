import { useSelector } from 'react-redux';
import { useForm } from '../../../../hooks';
import { RootState, startLogout, startRegisterUserBackend, startRegisterUserFirebase, StatusType, useAppDispatch } from '../../../../store';

export const useRegister = () => {
    const dispatch = useAppDispatch();

    const { status, id, email } = useSelector((state: RootState) => state.auth);

    const initialForm = {
        name: '',
        username: '',
        email,
        password: '',
        repeatPassword: ''
    };

    const { formState, onInputChange } = useForm(initialForm);

    const onSubmitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status == StatusType.NOT_REGISTERED) {
            return dispatch(startRegisterUserBackend({ id, email, username: formState.username, name: formState.name }));
        }
        if (formState.password !== formState.repeatPassword) {
            return dispatch(startLogout('Las contras no coinciden'));
        }
        return dispatch(startRegisterUserFirebase({ email: formState.email, username: formState.username, name: formState.name, password: formState.password }));
    };

    return {
        status,
        onSubmitRegister,
        onInputChange,
        formState
    };
};