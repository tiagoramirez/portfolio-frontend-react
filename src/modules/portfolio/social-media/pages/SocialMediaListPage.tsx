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
        <section>
            <NavLink to='add' className='absolute top-2 right-3'>
                <AddIcon ></AddIcon>
            </NavLink>
            <h1 className='text-center'>Social Media&apos;s List</h1>
            {activeUser.socialMedias.map(sm =>
                <div className='flex justify-center mb-3' key={sm.id}>
                    <p className='text-secondary mr-6'>{sm.name}</p>
                    <div className='grid grid-cols-2 gap-2 my-auto'>
                        <NavLink to={sm.id as string}>
                            <EditIcon />
                        </NavLink>
                        <NavLink to='.' onClick={() => onDeleteSocialMedia(sm.id as string)}>
                            <DeleteIcon />
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    );
};
