import { useNavigate } from 'react-router-dom';
import { LoginIcon } from '../../icons';

export const LoginButton = () => {
    const navigate = useNavigate();

    const onRedirectLogin = () => navigate('/auth/login');

    return (
        <button type='button' onClick={onRedirectLogin} className='
        mb-2 sm:mb-0 sm:ml-5 px-1
        flex items-center justify-center
        hover:text-accent
        transition duration-200 ease-in-out
    '>
            <p className='mr-1'>Login</p>
            <LoginIcon className='w-6 h-6' />
        </button>
    );
};
