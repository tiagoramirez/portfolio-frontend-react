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
        <div className='main-container'>
            <h1 className='mb-4 text-center font-semibold text-2xl text-secondary'>SIGN IN</h1>
            <div className='divide-y divide-dashed divide-primary'>
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                    <input type='text' placeholder='Email' spellCheck='false' className='input-text mb-4'
                        {...register('email', { required: true })}
                    />
                    <input type='password' placeholder='Contraseña' className='input-text'
                        {...register('password', { required: true })}
                    />
                    {
                        status == StatusType.CHECKING
                            ?
                            <span className='loader'></span>
                            :
                            <button type='submit' className='btn w-2/3 mx-auto my-4 lg:w-1/3'>
                                <span className='mr-2'>Sign In</span>
                                <LoginIcon className='w-5 h-5' />
                            </button>
                    }
                </form>
                {
                    status != StatusType.CHECKING
                    &&
                    <div className='pt-2 grid grid-cols-2 gap-4'>
                        <NavLink to='../register' className='btn'>
                            <span className='mr-2'>Register</span>
                            <NewUserIcon className='w-5 h-5' />
                        </NavLink>
                        <button type='button' onClick={signInWithGoogle} className='btn'>
                            <span className='mr-2'>Google</span>
                            <GoogleIcon className='w-5 h-5' />
                        </button>
                    </div>
                }
            </div>
        </div >
    );
};