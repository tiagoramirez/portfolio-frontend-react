import { NavLink } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { startLoginWithEmailPassword, useAppDispatch } from '../../../store';
import { AuthActionButton, AuthContainer, AuthInput } from './components';

interface Props {
    signInWithGoogle: () => void;
}

export const LoginPage = ({ signInWithGoogle }: Props) => {

    const dispatch = useAppDispatch();

    const { formState, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formState;

    const onSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }));
    };

    return (
        <>
            <AuthContainer title='Login'>
                <form onSubmit={onSubmitLogin} className="px-5 pt-3">
                    <AuthInput name={'email'} onInputChange={onInputChange} value={email} />
                    <AuthInput name={'password'} onInputChange={onInputChange} value={password} isPassword />
                    <AuthActionButton actionName='Login' />
                </form>
                <div className="p-5 pb-2">
                    <div className="grid grid-cols-2 gap-3">
                        <NavLink to='../register' className="transition duration-200 ease-in-out border border-primary text-secondary w-full py-2.5 rounded-lg text-sm shadow-sm bg-btnSecondary hover:bg-btnPrimary hover:shadow-md font-normal text-center inline-block">Register</NavLink>
                        <button type="button" onClick={signInWithGoogle} className="transition duration-200 ease-in-out border border-primary text-secondary w-full py-2.5 rounded-lg text-sm shadow-sm bg-btnSecondary hover:bg-btnPrimary hover:shadow-md font-normal text-center inline-block">Google</button>
                    </div>
                </div>
                <div className="text-center sm:text-left whitespace-nowrap flex justify-center">
                    <button className="px-5 py-4 cursor-pointer text-sm rounded-lg text-gray-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="inline-block ml-1 line-through">Forgot Password</span>
                    </button>
                </div>
            </AuthContainer>
            <div className="w-5/6 lg:w-1/2 mt-2">
                <NavLink to='/' className="px-5 py-4 cursor-pointer text-sm rounded-lg text-gray-500 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="inline-block ml-1">Back to users</span>
                </NavLink>
            </div>
        </>
    );
};