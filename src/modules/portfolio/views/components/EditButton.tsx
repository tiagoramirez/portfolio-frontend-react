import { EditIcon } from '../../../../icons';
import { useEdit } from '../../hooks';

export const EditButton = ({ isForSection }: { isForSection?: boolean } ) => {

    const { isEditPage } = useEdit();

    if (!isEditPage) {
        return <></>;
    }

    return (
        <button className={`absolute ${isForSection ? 'top-1 right-1' : 'top-2/4 -right-10'}`}>
            <EditIcon className='h-8 w-8' />
        </button>
    );
};