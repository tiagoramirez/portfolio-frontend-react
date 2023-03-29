import { NavLink } from 'react-router-dom';
import { usePathInfo } from '../../../hooks';
import { EditIcon } from '../../../icons';

interface Props {
    children: JSX.Element[] | JSX.Element;
    title: string;
    to: string;
}

export const ViewContainer = ({ children, title, to }: Props) => {

    const { isOwnProfile } = usePathInfo();

    return (
        <div className='view-container'>
            <div className='flex justify-between w-full border-b border-b-primary mb-2'>
                <h1>{title}</h1>
                {isOwnProfile && <NavLink to={to} className='ml-4 h-full' ><EditIcon className='h-7' /></NavLink>}
            </div>
            {children}
        </div>
    );
};
