import { useSelector } from 'react-redux';
import { useForm } from '../../../../hooks';
import { registerUserBackend, RootState, startLogout, startRegisterUserWithEmailPassword, Status, useAppDispatch } from '../../../../store';

const initialForm = {
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
};

export const useRegister = () => {
    const dispatch = useAppDispatch();

    const { status, uid } = useSelector((state: RootState) => state.auth);

    const { formState, onInputChange } = useForm(initialForm);

    const onSubmitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status == Status.NOT_REGISTERED) {
            await registerUserBackend(uid, formState.email, formState.username, formState.name);
        }
        if (formState.password === formState.repeatPassword) {
            dispatch(startRegisterUserWithEmailPassword(formState.name, formState.username, formState.email, formState.password));
        }
        else {
            dispatch(startLogout('Las contras no coinciden'));
        }
    };

    return {
        status,
        onSubmitRegister,
        onInputChange,
        formState
    };
};