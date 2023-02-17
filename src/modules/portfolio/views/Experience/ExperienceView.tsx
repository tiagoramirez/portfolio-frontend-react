import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { AddBUtton, EditButton, SectionContainer } from '../components';
import { ExperienceContainer } from './ExperienceContainer';

export const ExperienceView = ({ showActionButtons }: { showActionButtons?: boolean }) => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isLoggedUserProfile, isEditParam } = useEdit();

    return (
        <SectionContainer title='Experiencia'>
            <>
                {showActionButtons && <AddBUtton />}
                {!isEditParam && isLoggedUserProfile && <EditButton to='edit/experiences' isForProfile />}
                <div className='divide-y divide-dashed divide-primary'>
                    {activeUser.experiences.map(exp => <ExperienceContainer showActionButtons={showActionButtons} key={exp.id} isEnglishMode={isEnglishMode} experience={exp} />)}
                </div>
            </>
        </SectionContainer>
    );
};