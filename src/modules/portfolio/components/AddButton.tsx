import { NavLink } from 'react-router-dom';
import { AddIcon } from '../../../icons';

export const AddBUtton = () => {
    return (
        <NavLink to='add' className='absolute top-1 right-1'>
            <AddIcon />
        </NavLink>
    );
};