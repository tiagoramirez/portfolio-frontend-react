import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ViewContainer } from '../../components';
import { ProjectComponent } from '../components';

export const ProjectView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    return (
        <ViewContainer title='Proyectos' to='edit/projects'>
            <>
                <div className='divide-y divide-dashed divide-primary'>
                    {activeUser.projects.map(proj => <ProjectComponent key={proj.id} isEnglishMode={isEnglishMode} project={proj} />)}
                </div>
            </>
        </ViewContainer>
    );
};

