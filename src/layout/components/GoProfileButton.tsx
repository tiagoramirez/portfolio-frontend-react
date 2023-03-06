import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserIcon } from '../../icons';
import { RootState } from '../../store';

export const GoProfileButton = () => {
    const navigate = useNavigate();

    const { username } = useSelector((state: RootState) => state.auth);

    const onRedirectProfile = () => navigate(`/${username}`);

    return (
        <button
            type='button'
            onClick={onRedirectProfile}
            className='
                mb-3 sm:mb-0 sm:ml-5
                hover:text-accent
                transition duration-200 ease-in-out
            '
        >
            <UserIcon className='w-6 h-6' />
        </button>
    );
};
