import { useNavigate } from 'react-router-dom';
import { GoogleIcon, LoginIcon, NewUserIcon } from '../../../icons';
import { StatusType } from '../../../store/auth';
import { useLogin } from '../hooks';

interface Props {
    signInWithGoogle: () => void;
}

export const LoginPage = ({ signInWithGoogle }: Props) => {

    const navigate = useNavigate();

    const { onSubmit, register, status } = useLogin();

    return (
        <section className='auth'>
            <h1 className='text-center'>SIGN IN</h1>
            <div className='divide-y divide-dashed divide-primary'>
                <form onSubmit={onSubmit}>
                    <input type='text' placeholder='Email' spellCheck='false' className='mb-4'
                        {...register('email', { required: true })}
                    />
                    <input type='password' placeholder='Contraseña' className='mb-4'
                        {...register('password', { required: true })}
                    />
                    {
                        status == StatusType.CHECKING
                            ?
                            <span className='loader'></span>
                            :
                            <button type='submit' className='w-2/3 mx-auto mb-4 lg:w-1/3'>
                                <span className='mr-2'>Sign In</span>
                                <LoginIcon />
                            </button>
                    }
                </form>
                {
                    status != StatusType.CHECKING
                    &&
                    <div className='pt-2 grid grid-cols-2 gap-4'>
                        <button onClick={() => navigate('../register')}>
                            <span className='mr-2'>Register</span>
                            <NewUserIcon />
                        </button>
                        <button onClick={signInWithGoogle}>
                            <span className='mr-2'>Google</span>
                            <GoogleIcon />
                        </button>
                    </div>
                }
            </div>
        </section>
    );
};