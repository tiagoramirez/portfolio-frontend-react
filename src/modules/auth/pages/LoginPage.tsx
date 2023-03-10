import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GoogleIcon, LoginIcon, NewUserIcon } from '../../../icons';
import { RootState, useAppDispatch } from '../../../store';
import { startLoginWithEmailPassword, StatusType } from '../../../store/auth';

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
                w-5/6 sm:w-1/2 lg:w-1/3 p-5 pb-2 mt-4
                bg-secondary rounded-2xl
                border-2 border-primary
            '>
                <h1 className='
                    mb-4
                    text-center font-semibold text-2xl text-secondary
                '>SIGN IN</h1>
                <div className='divide-y divide-dashed divide-primary'>
                    <form onSubmit={handleSubmit(onSubmitLogin)}>
                        <input
                            type='text'
                            placeholder='Email'
                            spellCheck='false'
                            className='
                                py-1 px-3 mb-4 w-full
                                text-primary bg-input rounded-2xl
                                placeholder:text-secondary
                                focus:outline-none
                            '
                            {...register('email', { required: true })}
                        />
                        <input
                            type='password'
                            placeholder='Contraseña'
                            className='
                                py-1 px-3 mb-4 w-full
                                text-primary bg-input rounded-2xl
                                placeholder:text-secondary
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
                                    py-2 w-2/5 mb-4 h-8 mx-auto
                                    flex items-center justify-center
                                    bg-btn rounded-lg text-secondary font-semibold
                                    hover:text-primary
                                    focus:outline-none
                                    transition duration-200 ease-in-out
                                '>
                                    <span className='mr-2'>Sign In</span>
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
                                    py-2 px-1 w-3/5 mx-auto mb-2 sm:mb-0
                                    flex items-center justify-center
                                    bg-btn text-sm rounded-lg text-secondary
                                    hover:text-primary
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
                                    py-2 px-1 w-3/5 mx-auto
                                    flex items-center justify-center
                                    bg-btn text-sm rounded-lg text-secondary
                                    hover:text-primary
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
            < div className='w-5/6 sm:w-1/2 lg:w-1/3 mt-2 mb-4' >
                <NavLink
                    to='/'
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