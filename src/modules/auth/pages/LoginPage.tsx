import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GoogleIcon, LoginIcon, NewUserIcon } from '../../../icons';
import { RootState, startLoginWithEmailPassword, StatusType, useAppDispatch } from '../../../store';

interface Props {
    signInWithGoogle: () => void;
}

interface Inputs {
    email: string;
    password: string;
}

export const LoginPage = ({ signInWithGoogle }: Props) => {

    const dispatch = useAppDispatch();

    const { status } = useSelector((state: RootState) => state.auth);

    const { handleSubmit, register } = useForm<Inputs>();

    const onSubmitLogin: SubmitHandler<Inputs> = data => dispatch(startLoginWithEmailPassword({ email: data.email, password: data.password }));

    return (
        <>
            <div className='
                w-5/6 sm:w-1/2 lg:w-1/3 p-5 pb-2
                bg-secondary border border-primary rounded-md
            '>
                <h1 className='
                    mb-2
                    text-center font-semibold
                '>INGRESO</h1>
                <div className='divide-y divide-dashed divide-primary'>
                    <form onSubmit={handleSubmit(onSubmitLogin)}>
                        <input
                            type='text'
                            placeholder='Email'
                            className='
                                py-1 px-2 mb-2 w-full
                                text-secondary bg-primary border border-primary rounded-lg
                                focus:outline-none
                            '
                            {...register('email', { required: true })}
                        />
                        <input
                            type='password'
                            placeholder='Contraseña'
                            className='
                                py-1 px-2 mb-2 w-full
                                text-secondary bg-primary border border-primary rounded-lg
                                focus:outline-none
                            '
                            {...register('password', { required: true })}
                        />
                        {
                            status == StatusType.CHECKING
                                ?
                                <span className='loader'></span>
                                :
                                <button type='submit' className='
                                    p-2 w-3/4 sm:w-1/2 mb-2 mx-auto
                                    flex items-center justify-center
                                    bg-btnSecondary border border-primary text-sm rounded-lg
                                    hover:bg-btnPrimary hover:text-accent
                                    focus:outline-none
                                    transition duration-200 ease-in-out
                                '>
                                    <span className='mr-2'>Login</span>
                                    <LoginIcon className='w-5 h-5' />
                                </button>
                        }
                    </form>
                    {
                        status != StatusType.CHECKING
                        &&
                        <div className='sm:grid sm:grid-cols-2 sm:gap-2 p-2 pb-0'>
                            <NavLink
                                to='../register'
                                className='
                                    p-2 w-1/2 sm:w-3/4 mx-auto mb-2 sm:mb-0
                                    flex items-center justify-center
                                    border border-primary rounded-lg text-sm bg-btnSecondary font-normal text-center
                                    hover:bg-btnPrimary hover:text-accent
                                    focus:outline-none
                                    transition duration-200 ease-in-out
                                '>
                                <span className='mr-2'>Register</span>
                                <NewUserIcon className='w-5 h-5' />
                            </NavLink>
                            <button
                                type='button'
                                onClick={signInWithGoogle}
                                className='
                                    p-2 w-1/2 sm:w-3/4 mx-auto
                                    flex items-center justify-center
                                    border border-primary rounded-lg text-sm bg-btnSecondary font-normal text-center
                                    hover:bg-btnPrimary hover:text-accent
                                    focus:outline-none
                                    transition duration-200 ease-in-out
                                '
                            >
                                <span className='mr-2'>Google</span>
                                <GoogleIcon className='w-5 h-5' />
                            </button>
                            <button className='
                                col-span-2
                                text-sm rounded-lg text-secondary font-light    
                                focus:outline-none
                            '>
                                <span className='ml-1 line-through'>Forgot Password</span>
                            </button>
                        </div>
                    }
                </div>
            </div >
            < div className='w-5/6 sm:w-1/2 lg:w-1/3 mt-2' >
                <NavLink
                    to='/portfolio-frontend-react'
                    className='
                        text-sm font-light text-secondary
                        focus:outline-none
                    '
                >
                    <span className='inline-block ml-1'>Back to home</span>
                </NavLink>
            </div >
        </>
    );
};