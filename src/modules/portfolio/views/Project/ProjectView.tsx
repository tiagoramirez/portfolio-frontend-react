import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { EditButton, SectionContainer } from '../components';
import { ProjectContainer } from './ProjectContainer';

export const ProjectView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isSameUserParamAuth } = useEdit();

    return (
        <SectionContainer title='Proyectos'>
            <>
                {isSameUserParamAuth && <EditButton to='edit/projects' isForSection />}
                {activeUser.projects.map(proj => <ProjectContainer key={proj.id} isEnglishMode={isEnglishMode} project={proj} />)}
            </>
        </SectionContainer>
    );
};

