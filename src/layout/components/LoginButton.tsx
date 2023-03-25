import { useNavigate } from 'react-router-dom';
import { LoginIcon } from '../../icons';

export const LoginButton = () => {
    const navigate = useNavigate();

    const onRedirectLogin = () => navigate('/auth/login');

    return (
        <button type='button' onClick={onRedirectLogin} className='layout-btn flex'>
            <p className='mr-1'>SIGN IN</p>
            <LoginIcon className='h-6' />
        </button>
    );
};
