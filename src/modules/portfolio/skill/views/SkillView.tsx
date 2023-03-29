import { useSelector } from 'react-redux';
import { usePathInfo } from '../../../../hooks';
import { RootState } from '../../../../store';
import { EditButton, SectionContainer } from '../../components';
import { UserSkill } from '../../models';
import { SkillContainer } from './SkillContainer';

export const SkillView = () => {
    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const orderSkills = (a: UserSkill, b: UserSkill): number => {
        const { name: nameA, type: typeA } = a.skillInfo;
        const { name: nameB, type: typeB } = b.skillInfo;
        if (typeA > typeB) return 1;
        if(typeA<typeB ) return -1;
        if(nameA>nameB) return 1;
        return -1;
    };

    const skills = (new Array<UserSkill>().concat(activeUser.skills).sort(orderSkills));


    const { isOwnProfile, isEditPath } = usePathInfo();

    return (
        <SectionContainer title='Skills'>
            <>
                {!isEditPath && isOwnProfile && <EditButton to='edit/skills' isForProfile />}
            </>
            <div className='flex flex-row flex-wrap justify-evenly px-4'>
                {skills.map(skill => <SkillContainer key={skill.id} skill={skill} />)}
            </div>
        </SectionContainer>
    );
};

