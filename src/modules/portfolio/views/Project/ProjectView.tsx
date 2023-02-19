import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { AddBUtton, EditButton, SectionContainer } from '../components';
import { ProjectContainer } from './ProjectContainer';

export const ProjectView = ({ showActionButtons }: { showActionButtons?: boolean }) => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isLoggedUserProfile, isEditParam } = useEdit();

    return (
        <SectionContainer title='Proyectos'>
            <>
                {showActionButtons && <AddBUtton />}
                {!isEditParam && isLoggedUserProfile && <EditButton to='edit/projects' isForProfile />}
                <div className='divide-y divide-dashed divide-primary'>
                    {activeUser.projects.map(proj => <ProjectContainer showActionButtons={showActionButtons} key={proj.id} isEnglishMode={isEnglishMode} project={proj} />)}
                </div>
            </>
        </SectionContainer>
    );
};

