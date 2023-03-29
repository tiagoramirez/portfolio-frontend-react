import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AddIcon, DeleteIcon, EditIcon } from '../../../../icons';
import { RootState, useAppDispatch } from '../../../../store';
import { startDeletingSocialMedia } from '../../../../store/portfolio';


export const SocialMediaListPage = () => {
    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const dispatch = useAppDispatch();

    const onDeleteSocialMedia = (id: string) => dispatch(startDeletingSocialMedia(id));

    return (
        <div className='main-container'>
            <NavLink to='add' className='clickable absolute top-2 right-3'>
                <AddIcon className='w-6'></AddIcon>
            </NavLink>
            <h1 className='mb-2 text-center text-lg font-semibold'>Social Media&apos;s List</h1>
            {activeUser.socialMedias.map(sm =>
                <div className='flex justify-center' key={sm.id}>
                    <p className='text-center mr-6'>{sm.socialMediaInfo.name}</p>
                    <div className='grid grid-cols-2 gap-2 my-auto'>
                        <NavLink to={sm.id as string} className='clickable'>
                            <EditIcon className='h-5' />
                        </NavLink>
                        <button onClick={() => onDeleteSocialMedia(sm.id as string)} className='clickable'>
                            <DeleteIcon className='h-5' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
