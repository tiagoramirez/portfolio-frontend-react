import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GoogleIcon, LoginIcon, NewUserIcon } from '../../../icons';
import { RootState, startLogout, startRegisterUserBackend, startRegisterUserFirebase, StatusType, useAppDispatch } from '../../../store';

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

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmitRegister: SubmitHandler<Inputs> = async (data) => {
        const { email, name, password, repeatPassword, username } = data;
        if (status == StatusType.NOT_REGISTERED) {
            return dispatch(startRegisterUserBackend({ id, email, username, name }));
        }
        if (password !== repeatPassword) {
            return dispatch(startLogout('Las contras no coinciden'));
        }
        return await dispatch(startRegisterUserFirebase({ email, username, name, password }));
    };

    return (
        <>
            <div className='
                w-5/6 sm:w-1/2 lg:w-1/3 p-5 pb-2
                bg-secondary border border-primary rounded-md
            '>
                <h1 className='
                    mb-2
                    text-center font-semibold
                '>REGISTRO</h1>
                <div className='divide-y divide-dashed divide-primary'>
                    <form onSubmit={handleSubmit(onSubmitRegister)} className='grid grid-cols-2 gap-4'>
                        <input
                            type='text'
                            placeholder='Nombre y Apellido'
                            maxLength={50}
                            className='
                                py-1 px-2 w-full h-9
                                text-secondary bg-primary border border-primary rounded-lg
                                focus:outline-none
                            '
                            {...register('name', {
                                required: true,
                                maxLength: 50
                            })}
                        />
                        <div>
                            <input
                                type='text'
                                placeholder='Usuario'
                                maxLength={15}
                                className='
                                        py-1 px-2 w-full h-9
                                        text-secondary bg-primary border border-primary rounded-lg
                                        focus:outline-none
                                    '
                                {...register('username', {
                                    required: true,
                                    minLength: 4,
                                    maxLength: 15
                                })}
                            />
                            {errors.username?.type === 'minLength' && <p className='text-red-600 text-sm font-light text-justify'>El usuario debe tener al menos 4 caracteres</p>}
                        </div>
                        {
                            status !== StatusType.NOT_REGISTERED &&
                            <>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    maxLength={100}
                                    className='
                                        py-1 px-2 w-full
                                        col-span-2
                                        text-secondary bg-primary border border-primary rounded-lg
                                        focus:outline-none
                                    '
                                    {...register('email', {
                                        required: true,
                                        maxLength: 100
                                    })}
                                />
                                <input
                                    type='password'
                                    placeholder='Contraseña'
                                    className='
                                        py-1 px-2 w-full
                                        text-secondary bg-primary border border-primary rounded-lg
                                        focus:outline-none
                                    '
                                    {...register('password', {
                                        required: true
                                    })}
                                />
                                <input
                                    type='password'
                                    placeholder='Confirmar contraseña'
                                    className='
                                        py-1 px-2 w-full
                                        text-secondary bg-primary border border-primary rounded-lg
                                        focus:outline-none
                                    '
                                    {...register('repeatPassword', {
                                        required: true
                                    })}
                                />
                            </>
                        }
                        {
                            status == StatusType.CHECKING
                                ?
                                <span className='loader col-span-2'></span>
                                :
                                <button type='submit' className='
                                        p-2 w-3/4 sm:w-1/2 mb-2 mx-auto
                                        col-span-2
                                        flex items-center justify-center
                                        bg-btnSecondary border border-primary text-sm rounded-lg
                                        hover:bg-btnPrimary hover:text-accent
                                        focus:outline-none
                                        transition duration-200 ease-in-out
                                    '>
                                    <span className='mr-2'>Register</span>
                                    <NewUserIcon className='w-5 h-5' />
                                </button>
                        }
                    </form>
                    {
                        status != StatusType.CHECKING
                        &&
                        <div className='sm:grid sm:grid-cols-2 sm:gap-2 p-2 pb-0'>
                            <NavLink
                                to='../login'
                                className='
                                    p-2 w-1/2 sm:w-3/4 mx-auto mb-2 sm:mb-0
                                    flex items-center justify-center
                                    border border-primary rounded-lg text-sm bg-btnSecondary font-normal text-center
                                    hover:bg-btnPrimary hover:text-accent
                                    focus:outline-none
                                    transition duration-200 ease-in-out
                                '>
                                <span className='mr-2'>Login</span>
                                <LoginIcon className='w-5 h-5' />
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
                        </div>
                    }
                </div>
            </div>
            {
                status != StatusType.NOT_REGISTERED
                &&
                < div className='w-5/6 sm:w-1/2 lg:w-1/3 mt-2' >
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
            }
        </>
    );
};
