import { NavLink } from 'react-router-dom';
import { HomeIcon } from '../../icons';

export const GoHomeButton = () => {
    return (
        <NavLink to="/" className='
            w-6 mb-2 sm:mb-0 sm:ml-5
            flex items-center justify-center
            hover:text-accent
            transition duration-200 ease-in-out
        '>
            <HomeIcon />
        </NavLink>
    );
};
