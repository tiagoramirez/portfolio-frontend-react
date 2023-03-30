import { useNavigate } from 'react-router-dom';
import { GoogleIcon, LoginIcon, NewUserIcon } from '../../../icons';
import { StatusType } from '../../../store/auth';
import { useRegister } from '../hooks';

interface Props {
    signInWithGoogle: () => void;
}

export const RegisterPage = ({ signInWithGoogle }: Props) => {
    const navigate = useNavigate();

    const { onSubmit, register, status } = useRegister();

    return (
        <section className='auth'>
            <h1 className='text-center'>REGISTER</h1>
            <div className='divide-y divide-dashed divide-primary'>
                <form onSubmit={onSubmit} className='grid grid-cols-2 gap-4'>
                    <input
                        type='text' placeholder='Nombre y Apellido' maxLength={50} className='col-span-2'
                        {...register('name', {
                            required: true,
                            maxLength: 50
                        })}
                    />
                    <input
                        type='text' placeholder='Usuario' maxLength={15} className='col-span-2'
                        {...register('username', {
                            required: true,
                            maxLength: 15
                        })}
                    />
                    {
                        status !== StatusType.NOT_REGISTERED &&
                        <>
                            <input type='email' placeholder='Email' maxLength={100} className='col-span-2'
                                {...register('email', {
                                    required: true,
                                    maxLength: 100
                                })}
                            />
                            <input type='password' placeholder='Contraseña'
                                {...register('password', {
                                    required: true
                                })}
                            />
                            <input type='password' placeholder='Confirmar contraseña'
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
                            <button type='submit' className='col-span-2 w-1/2 mx-auto mb-3'>
                                <span className='mr-2'>Register</span>
                                <NewUserIcon />
                            </button>
                    }
                </form>
                {
                    status != StatusType.CHECKING && status != StatusType.NOT_REGISTERED
                    &&
                    <div className='pt-2 grid grid-cols-2 gap-4'>
                        <button onClick={() => navigate('../login')}>
                            <p className='mr-2'>Login</p>
                            <LoginIcon />
                        </button>
                        <button onClick={signInWithGoogle}>
                            <p className='mr-2'>Google</p>
                            <GoogleIcon />
                        </button>
                    </div>
                }
            </div>
        </section>
    );
};