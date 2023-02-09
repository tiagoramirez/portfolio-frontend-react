import { useNavigate } from 'react-router-dom';
import { AddIcon } from '../../../../icons';

export const AddBUtton = () => {

    const navigate = useNavigate();

    const onRedirect = () => navigate('add');

    return (
        <button onClick={onRedirect} className='absolute top-1 right-1'>
            <AddIcon className='h-8 w-8' />
        </button>
    );
};