import { useNavigate } from 'react-router-dom';
import { EditIcon } from '../../../../icons';

export const EditButton = ({ isForSection, to }: { isForSection?: boolean, to: string }) => {
    const navigate = useNavigate();

    const onRedirect = () => navigate(to);

    return (
        <button onClick={onRedirect} className={`absolute ${isForSection ? 'top-1 right-1' : 'top-2/4 -right-10'}`}>
            <EditIcon className='h-8 w-8' />
        </button>
    );
};