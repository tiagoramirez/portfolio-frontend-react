import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '../../icons';

export const GoHomeButton = () => {
    const navigate = useNavigate();

    const onRedirectHome = () => navigate('/');

    return (
        <button type='button' onClick={onRedirectHome} className='layout-btn'>
            <HomeIcon className='h-6' />
        </button>
    );
};
