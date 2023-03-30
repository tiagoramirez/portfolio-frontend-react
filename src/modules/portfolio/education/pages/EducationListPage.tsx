import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AddIcon, DeleteIcon, EditIcon } from '../../../../icons';
import { RootState, useAppDispatch } from '../../../../store';
import { startDeletingEducation } from '../../../../store/portfolio';

export const EducationListPage = () => {
    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const dispatch = useAppDispatch();

    const onDeleteSocialMedia = (id: string) => dispatch(startDeletingEducation(id));

    return (
        <section>
            <NavLink to='add' className='absolute top-2 right-3'>
                <AddIcon />
            </NavLink>
            <h1 className='text-center'>EDUCATION LIST</h1>
            {activeUser.educations.map(ed =>
                <div className='flex justify-center mb-3' key={ed.id}>
                    <p className='mr-6 text-secondary'>{ed.titleName} - {ed.institute}</p>
                    <div className='grid grid-cols-2 gap-3 my-auto'>
                        <NavLink to={ed.id as string}>
                            <EditIcon />
                        </NavLink>
                        <NavLink to='.' onClick={() => onDeleteSocialMedia(ed.id as string)}>
                            <DeleteIcon />
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    );
};
