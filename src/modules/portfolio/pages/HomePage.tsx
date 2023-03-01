import { NavLink } from 'react-router-dom';
import { NextIcon, PreviousIcon } from '../../../icons';
import { useUsers } from '../hooks';

export const HomePage = () => {

    const { goNextPage, goPreviousPage, loading, page, totalUsers, users } = useUsers();

    if (loading) {
        return (<span className='loader'></span>);
    }

    return (
        <>
            <div className='flex flex-col'>
                {
                    users.map(user => (
                        <NavLink to={`/portfolio-frontend-react/${user.username}`} className='font-semibold text-xl text-center mb-4 cursor-pointer hover:text-accent' key={user.username}>{user.name}</NavLink>
                    ))
                }
            </div>
            {
                totalUsers > 10 && (
                    <div className='
                        mt-4 w-2/6 md:w-1/6 h-10
                        flex flex-row justify-between items-center
                        border border-primary rounded-lg overflow-hidden
                    '>
                        <button onClick={goPreviousPage} className='
                            p-1 w-8 h-full
                            flex justify-center items-center
                            border-r border-primary bg-btnPrimary hover:bg-btnSecondary hover:text-accent
                            transition duration-200 ease-in-out
                        '>
                            <PreviousIcon className='w-6 h-6' />
                        </button>

                        <p className='text-lg'>{page + 1}</p>

                        <button onClick={goNextPage} className='
                            p-1 w-8 h-full
                            flex justify-center items-center
                            border-l border-primary bg-btnPrimary hover:bg-btnSecondary hover:text-accent
                            transition duration-200 ease-in-out
                        '>
                            <NextIcon className='w-6 h-6' />
                        </button>
                    </div>
                )
            }
        </>
    );
};