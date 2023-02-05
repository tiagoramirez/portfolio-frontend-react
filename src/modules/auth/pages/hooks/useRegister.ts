import { useSelector } from 'react-redux';
import { useForm } from '../../../../hooks';
import { RootState, startLogout, startRegisterUserBackend, startRegisterUserFirebase, Status, useAppDispatch } from '../../../../store';

export const useRegister = () => {
    const dispatch = useAppDispatch();

    const { status, uid, email } = useSelector((state: RootState) => state.auth);

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
        if (status == Status.NOT_REGISTERED) {
            return dispatch(startRegisterUserBackend(uid, formState.email, formState.username, formState.name));
        }
        if (formState.password === formState.repeatPassword) {
            return dispatch(startRegisterUserFirebase(formState.name, formState.username, formState.email, formState.password));
        }
        else {
            return dispatch(startLogout('Las contras no coinciden'));
        }
    };

    return {
        status,
        onSubmitRegister,
        onInputChange,
        formState
    };
};