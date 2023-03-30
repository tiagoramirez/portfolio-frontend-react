import { DeleteIcon } from '../../../icons';

interface Props {
    onDelete: () => void;
}

export const DeleteButton = ({ onDelete }: Props) => {
    return (
        <button onClick={onDelete} className='absolute top-[60%] -right-16'>
            <DeleteIcon />
        </button>
    );
};