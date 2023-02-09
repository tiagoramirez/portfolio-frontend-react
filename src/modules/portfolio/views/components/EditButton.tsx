import { useNavigate } from 'react-router-dom';
import { EditIcon } from '../../../../icons';

export const EditButton = ({ isForSection, to }: { isForSection?: boolean, to: string }) => {
    const navigate = useNavigate();

    const onRedirect = () => navigate(to);

    return (
        <button onClick={onRedirect} className={`absolute ${isForSection ? 'top-1 right-1' : 'top-1/4 -right-16'}`}>
            <EditIcon className='h-6 w-6' />
        </button>
    );
};