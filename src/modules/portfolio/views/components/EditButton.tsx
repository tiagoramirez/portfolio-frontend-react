import { useNavigate } from 'react-router-dom';
import { EditIcon } from '../../../../icons';

export const EditButton = ({ isForProfile, to }: { isForProfile?: boolean, to: string }) => {
    const navigate = useNavigate();

    const onRedirect = () => navigate(to);

    return (
        <button onClick={onRedirect} className={`absolute ${isForProfile ? 'top-3 right-3' : 'top-1/4 -right-16'}`}>
            <EditIcon className='h-6 w-6' />
        </button>
    );
};