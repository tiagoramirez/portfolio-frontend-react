import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AddIcon, DeleteIcon, EditIcon } from '../../../../icons';
import { RootState, useAppDispatch } from '../../../../store';
import { startDeletingProject } from '../../../../store/portfolio';

export const ProjectListPage = () => {

    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const dispatch = useAppDispatch();

    const onDeleteSocialMedia = (id: string) => dispatch(startDeletingProject(id));

    return (
        <section>
            <NavLink to='add' className='absolute top-2 right-3'>
                <AddIcon />
            </NavLink>
            <h1 className='text-center'>PROJECT LIST</h1>
            {activeUser.projects.map(proj =>
                <div className='flex justify-center mb-3' key={proj.id}>
                    <p className='mr-6 text-secondary'>{proj.name}</p>
                    <div className='grid grid-cols-2 gap-3 my-auto'>
                        <NavLink to={proj.id as string}>
                            <EditIcon />
                        </NavLink>
                        <NavLink to='.' onClick={() => onDeleteSocialMedia(proj.id as string)}>
                            <DeleteIcon />
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    );
};
