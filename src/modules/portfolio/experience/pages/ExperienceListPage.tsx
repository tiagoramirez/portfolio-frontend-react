import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AddIcon, DeleteIcon, EditIcon } from '../../../../icons';
import { RootState, useAppDispatch } from '../../../../store';
import { startDeletingExperience } from '../../../../store/portfolio';


export const ExperienceListPage = () => {
    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const dispatch = useAppDispatch();

    const onDeleteSocialMedia = (id: string) => dispatch(startDeletingExperience(id));

    return (
        <section>
            <NavLink to='add' className='absolute top-2 right-3'>
                <AddIcon />
            </NavLink>
            <h1 className='text-center'>EXPERIENCE LIST</h1>
            {activeUser.experiences.map(exp =>
                <div className='flex justify-center' key={exp.id}>
                    <p className='mr-6 text-secondary'>{exp.position} - {exp.company}</p>
                    <div className='grid grid-cols-2 gap-3 my-auto'>
                        <NavLink to={exp.id as string}>
                            <EditIcon />
                        </NavLink>
                        <NavLink to='.' onClick={() => onDeleteSocialMedia(exp.id as string)}>
                            <DeleteIcon />
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    );
};
