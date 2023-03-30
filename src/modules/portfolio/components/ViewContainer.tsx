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
        <article className='my-2'>
            <div className='flex justify-between w-full border-b border-b-primary mb-2'>
                <h1>{title}</h1>
                {isOwnProfile && <NavLink to={to} className='ml-4 h-full' ><EditIcon /></NavLink>}
            </div>
            {children}
        </article>
    );
};
