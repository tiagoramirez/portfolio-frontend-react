import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AddIcon, DeleteIcon, EditIcon } from '../../../../icons';
import { RootState, useAppDispatch } from '../../../../store';
import { startDeletingSkill } from '../../../../store/portfolio';
import { UserSkill } from '../../models';

export const SkillListPage = () => {

    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const dispatch = useAppDispatch();

    const onDeleteSocialMedia = (id: string) => dispatch(startDeletingSkill(id));

    const orderSkills = (a: UserSkill, b: UserSkill): number => {
        const { name: nameA } = a.skillInfo;
        const { name: nameB } = b.skillInfo;
        if (nameA > nameB) return 1;
        return -1;
    };

    const skills = (new Array<UserSkill>().concat(activeUser.skills).sort(orderSkills));

    return (
        <section>
            <NavLink to='add' className='absolute top-2 right-3'>
                <AddIcon />
            </NavLink>
            <h1 className='text-center'>SKILL LIST</h1>
            {skills.map(skill =>
                <div className='flex justify-center mb-3' key={skill.id}>
                    <p className='mr-6 text-secondary'>{skill.skillInfo.name}</p>
                    <div className='grid grid-cols-2 gap-3 my-auto'>
                        <NavLink to={skill.id as string}>
                            <EditIcon />
                        </NavLink>
                        <NavLink to='.' onClick={() => onDeleteSocialMedia(skill.id as string)}>
                            <DeleteIcon />
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    );
};