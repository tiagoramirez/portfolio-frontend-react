import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { EditButton, SectionContainer } from '../components';
import { SkillContainer } from './SkillContainer';

export const SkillView = () => {
    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const { isSameUserParamAuth } = useEdit();

    return (
        <SectionContainer title='Skills'>
            <>
                {isSameUserParamAuth && <EditButton to='edit/skills' isForSection />}
            </>
            <div className='flex flex-row flex-wrap justify-evenly'>
                {activeUser.skills.map(skill => <SkillContainer key={skill.id} skill={skill} />)}
            </div>
        </SectionContainer>
    );
};

