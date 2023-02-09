import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { EditButton, SectionContainer } from '../components';
import { ExperienceContainer } from './ExperienceContainer';

export const ExperienceView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isSameUserParamAuth } = useEdit();

    return (
        <SectionContainer title='Experiencia'>
            <>
                {isSameUserParamAuth && <EditButton to='edit/experiences' isForSection />}
                {activeUser.experiences.map(exp => <ExperienceContainer key={exp.id} isEnglishMode={isEnglishMode} experience={exp} />)}
            </>
        </SectionContainer>
    );
};