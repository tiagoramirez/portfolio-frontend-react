import { NavLink } from 'react-router-dom';
import { StatusType } from '../../../store';
import { AuthActionButton, AuthContainer, AuthInput } from './components';
import { useRegister } from './hooks';

interface Props {
    signInWithGoogle: () => void;
}

export const RegisterPage = ({ signInWithGoogle }: Props) => {

    const { formState, onInputChange, onSubmitRegister, status } = useRegister();

    return (
        <>
            <AuthContainer title='Register'>
                <form onSubmit={onSubmitRegister} className="px-5 py-3">
                    <AuthInput name={'name'} onInputChange={onInputChange} value={formState.name} />
                    <AuthInput name={'username'} onInputChange={onInputChange} value={formState.username} />
                    {
                        status !== StatusType.NOT_REGISTERED &&
                        <>
                            <AuthInput name={'email'} onInputChange={onInputChange} value={formState.email} />
                            <AuthInput name={'password'} onInputChange={onInputChange} value={formState.password} isPassword />
                            <AuthInput name={'repeatPassword'} onInputChange={onInputChange} value={formState.repeatPassword} isPassword />
                        </>
                    }
                    <AuthActionButton actionName='Register' />
                </form>
                <>
                    {
                        status != StatusType.NOT_REGISTERED
                        &&
                        <div className="px-5 pb-2">
                            <div className="grid grid-cols-2 gap-3">
                                <NavLink to='../login' className="transition duration-200 ease-in-out border border-primary text-secondary w-full py-2.5 rounded-lg text-sm shadow-sm bg-btnSecondary hover:bg-btnPrimary hover:shadow-md font-normal text-center inline-block">Login</NavLink>
                                <button type="button" onClick={signInWithGoogle} className="transition duration-200 ease-in-out border border-primary text-secondary w-full py-2.5 rounded-lg text-sm shadow-sm bg-btnSecondary hover:bg-btnPrimary hover:shadow-md font-normal text-center inline-block">Google</button>
                            </div>
                        </div>
                    }
                </>
            </AuthContainer>
            {
                status != StatusType.NOT_REGISTERED
                &&
                <div className="w-5/6 lg:w-1/2 mt-2">
                    <NavLink to='/' className="px-5 py-4 cursor-pointer text-sm rounded-lg text-gray-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="inline-block ml-1">Back to users</span>
                    </NavLink>
                </div>
            }
        </>
    );
};
