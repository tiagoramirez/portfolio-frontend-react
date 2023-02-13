import { DeleteIcon } from '../../../../icons';

interface Props {
    onDelete: () => void;
}

export const DeleteButton = ({ onDelete }: Props) => {
    return (
        <button onClick={onDelete} className='absolute top-3/4 -right-16'>
            <DeleteIcon className='h-6 w-6' />
        </button>
    );
};