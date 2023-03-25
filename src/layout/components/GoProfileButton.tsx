import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserIcon } from '../../icons';
import { RootState } from '../../store';

export const GoProfileButton = () => {
    const navigate = useNavigate();

    const { username } = useSelector((state: RootState) => state.auth);

    const onRedirectProfile = () => navigate(`/${username}`);

    return (
        <button type='button' onClick={onRedirectProfile} className='layout-btn'>
            < UserIcon className='h-6' />
        </button >
    );
};
