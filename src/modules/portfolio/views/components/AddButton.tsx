import { AddIcon } from '../../../../icons';
import { useEdit } from '../../hooks';

export const AddBUtton = () => {

    const { isEditPage } = useEdit();

    if (!isEditPage) {
        return <></>;
    }

    return (
        <button className='absolute top-1 right-1'>
            <AddIcon className='h-8 w-8' />
        </button>
    );
};