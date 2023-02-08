import { DeleteIcon } from '../../../../icons';
import { useEdit } from '../../hooks';

export const DeleteButton = ({ isForSection }: { isForSection?: boolean }) => {

    const { isEditPage } = useEdit();

    if (!isEditPage) {
        return <></>;
    }

    return (
        <button className={`absolute ${isForSection ? 'top-1 right-1' : 'top-3/4 -right-10'}`}>
            <DeleteIcon className='h-8 w-8' />
        </button>
    );
};