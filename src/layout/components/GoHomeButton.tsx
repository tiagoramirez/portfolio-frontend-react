import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '../../icons';

export const GoHomeButton = () => {
    const navigate = useNavigate();

    const onRedirectHome = () => navigate('/');

    return (
        <button type='button' onClick={onRedirectHome} className='
            mb-3 sm:mb-0 sm:ml-5
            hover:text-accent
            transition duration-200 ease-in-out
        '>
            <HomeIcon className='w-6 h-6' />
        </button>
    );
};
