import { useSelector } from 'react-redux';
import { usePathInfo } from '../../../../hooks';
import { RootState } from '../../../../store';
import { EditButton, SectionContainer } from '../components';
import { SkillContainer } from './SkillContainer';

export const SkillView = () => {
    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const { isOwnProfile, isEditPath } = usePathInfo();

    return (
        <SectionContainer title='Skills'>
            <>
                {!isEditPath && isOwnProfile && <EditButton to='edit/skills' isForProfile />}
            </>
            <div className='flex flex-row flex-wrap justify-evenly'>
                {activeUser.skills.map(skill => <SkillContainer key={skill.id} skill={skill} />)}
            </div>
        </SectionContainer>
    );
};

