import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LoginIcon } from '../../../icons';
import { RootState, startLogout, startRegisterUserBackend, startRegisterUserFirebase, StatusType, useAppDispatch } from '../../../store';
import { AuthContainer } from './components';

interface Props {
    signInWithGoogle: () => void;
}

interface Inputs {
    name: string;
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export const RegisterPage = ({ signInWithGoogle }: Props) => {

    const dispatch = useAppDispatch();

    const { status, id } = useSelector((state: RootState) => state.auth);

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmitRegister: SubmitHandler<Inputs> = data => {
        const { email, name, password, repeatPassword, username } = data;
        if (status == StatusType.NOT_REGISTERED) {
            return dispatch(startRegisterUserBackend({ id, email, username, name }));
        }
        if (password !== repeatPassword) {
            return dispatch(startLogout('Las contras no coinciden'));
        }
        return dispatch(startRegisterUserFirebase({ email, username, name, password }));
    };

    return (
        <>
            <AuthContainer title='Register'>
                <form onSubmit={handleSubmit(onSubmitRegister)} className="px-5 py-3">
                    <div className='flex flex-col'>
                        <label className='mb-2 text-secondary'>Nombre</label>
                        <input className='bg-primary border border-primary rounded-lg py-1 px-2 mb-2 focus:outline-none' type="text" placeholder='Nombre' {...register('name', { required: true })} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-2 text-secondary'>Usuario</label>
                        <input className='bg-primary border border-primary rounded-lg py-1 px-2 mb-2 focus:outline-none' type="text" placeholder='Nombre' {...register('username', { required: true })} />
                    </div>
                    {
                        status !== StatusType.NOT_REGISTERED &&
                        <>
                            <div className='flex flex-col'>
                                <label className='mb-2 text-secondary'>Email</label>
                                <input className='bg-primary border border-primary rounded-lg py-1 px-2 mb-2 focus:outline-none' type="email" placeholder='Email' {...register('email', { required: true })} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2 text-secondary'>Password</label>
                                <input className='bg-primary border border-primary rounded-lg py-1 px-2 mb-2 focus:outline-none' type="text" placeholder='Contra 1' {...register('password', { required: true })} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2 text-secondary'>Repeat Password</label>
                                <input className='bg-primary border border-primary rounded-lg py-1 px-2 mb-2 focus:outline-none' type="text" placeholder='Contra 2' {...register('repeatPassword', { required: true })} />
                            </div>
                        </>
                    }
                    <div className='flex justify-center'>
                        <button type="submit" className="
                            p-2 w-1/3
                            flex items-center justify-center
                            bg-btnSecondary border border-primary text-secondary text-sm shadow-sm rounded-lg font-semibold
                            hover:bg-btnPrimary hover:shadow-md
                            transition duration-200 ease-in-out
                        ">
                            <span className='mr-2'>Register</span>
                            <LoginIcon className="w-5 h-5" />
                        </button>
                    </div>
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
