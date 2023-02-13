import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { LoginIcon } from '../../../icons';
import { startLoginWithEmailPassword, useAppDispatch } from '../../../store';
import { AuthContainer } from './components';

interface Props {
    signInWithGoogle: () => void;
}

interface Inputs {
    email: string;
    password: string;
}

export const LoginPage = ({ signInWithGoogle }: Props) => {

    const dispatch = useAppDispatch();

    const { handleSubmit, register } = useForm<Inputs>();

    const onSubmitLogin: SubmitHandler<Inputs> = data => dispatch(startLoginWithEmailPassword({ email: data.email, password: data.password }));

    return (
        <>
            <AuthContainer title='Login'>
                <form onSubmit={handleSubmit(onSubmitLogin)} className="px-5 pt-3">
                    <div className='flex flex-col'>
                        <label className='mb-2 text-secondary'>Email</label>
                        <input className='bg-primary border border-primary rounded-lg py-1 px-2 mb-2 focus:outline-none' type="text" placeholder='Email' {...register('email', { required: true })} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-2 text-secondary'>Contrasenia</label>
                        <input className='bg-primary border border-primary rounded-lg py-1 px-2 mb-2 focus:outline-none' type="password" placeholder='Contrasenia' {...register('password', { required: true })} />
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="
                            p-2 w-1/3
                            flex items-center justify-center
                            bg-btnSecondary border border-primary text-secondary text-sm shadow-sm rounded-lg font-semibold
                            hover:bg-btnPrimary hover:shadow-md
                            transition duration-200 ease-in-out
                        ">
                            <span className='mr-2'>Login</span>
                            <LoginIcon className="w-5 h-5" />
                        </button>
                    </div>
                </form>
                <div className="py-2 px-10 grid grid-cols-2 gap-3">
                    <NavLink to='../register' className="transition duration-200 ease-in-out border border-primary text-secondary w-full py-2.5 rounded-lg text-sm shadow-sm bg-btnSecondary hover:bg-btnPrimary hover:shadow-md font-normal text-center inline-block">Register</NavLink>
                    <button type="button" onClick={signInWithGoogle} className="transition duration-200 ease-in-out border border-primary text-secondary w-full py-2.5 rounded-lg text-sm shadow-sm bg-btnSecondary hover:bg-btnPrimary hover:shadow-md font-normal text-center inline-block">Google</button>
                </div>
                <div className="text-center sm:text-left whitespace-nowrap flex justify-center mb-2">
                    <button className="cursor-pointer text-sm rounded-lg text-gray-500 focus:outline-none">
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