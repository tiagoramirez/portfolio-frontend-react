import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GoogleIcon, LoginIcon, NewUserIcon } from '../../../icons';
import { RootState, useAppDispatch } from '../../../store';
import { startRegisterUserBackend, startRegisterUserFirebase, StatusType } from '../../../store/auth';

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

    const onSubmitRegister: SubmitHandler<Inputs> = async (data) => {
        const { email, name, password, repeatPassword, username } = data;
        if (name.length < 4) return toast.error('Nombre debe ser de 4 o mas caracteres.');
        if (username.length < 4) return toast.error('Usuario debe ser de 4 o mas caracteres.');
        if (status == StatusType.NOT_REGISTERED) return dispatch(startRegisterUserBackend({ id, email, username, name }));
        if (password !== repeatPassword) return toast.error('Las contraseñas no coinciden.');
        return await dispatch(startRegisterUserFirebase({ email, username, name, password }));
    };

    return (
        <>
            <div className='
                w-5/6 sm:w-1/2 lg:w-1/3 p-5 pb-2 mt-4
                bg-secondary border border-primary rounded-md
            '>
                <h1 className='mb-2 text-center font-semibold'>REGISTRO</h1>
                <div className='divide-y divide-dashed divide-primary'>
                    <form onSubmit={handleSubmit(onSubmitRegister)} className='grid grid-cols-2 gap-4'>
                        <input
                            type='text' placeholder='Nombre y Apellido' maxLength={50} className='input-text col-span-2'
                            {...register('name', {
                                required: true,
                                maxLength: 50
                            })}
                        />
                        <input
                            type='text' placeholder='Usuario' maxLength={15} className='input-text col-span-2'
                            {...register('username', {
                                required: true,
                                maxLength: 15
                            })}
                        />
                        {
                            status !== StatusType.NOT_REGISTERED &&
                            <>
                                <input type='email' placeholder='Email' maxLength={100} className='input-text col-span-2'
                                    {...register('email', {
                                        required: true,
                                        maxLength: 100
                                    })}
                                />
                                <input type='password' placeholder='Contraseña' className='input-text'
                                    {...register('password', {
                                        required: true
                                    })}
                                />
                                <input type='password' placeholder='Confirmar contraseña' className='input-text'
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
                                <button type='submit' className='btn col-span-2 w-1/2 mx-auto mb-3'>
                                    <span className='mr-2'>Register</span>
                                    <NewUserIcon className='w-5 h-5' />
                                </button>
                        }
                    </form>
                    {
                        status != StatusType.CHECKING
                        &&
                        <div className='pt-2 grid grid-cols-2 gap-4'>
                            <NavLink to='../login' className='btn'>
                                <span className='mr-2'>Login</span>
                                <LoginIcon className='w-5 h-5' />
                            </NavLink>
                            <button type='button' onClick={signInWithGoogle} className='btn'>
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
                < div className='w-5/6 sm:w-1/2 lg:w-1/3 mt-2 mb-4' >
                    <NavLink to='/' className=' text-sm font-light text-secondary focus:outline-none'>
                        <span className='inline-block ml-1'>Back to home</span>
                    </NavLink>
                </div >
            }
        </>
    );
};
