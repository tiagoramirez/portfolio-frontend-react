import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ViewContainer } from '../../components';
import { ExperienceContainer } from './ExperienceContainer';

export const ExperienceView = ({ showActionButtons }: { showActionButtons?: boolean }) => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    return (
        <ViewContainer title='Experiencia' to='edit/experiences'>
            <>
                <div className='divide-y divide-dashed divide-primary'>
                    {activeUser.experiences.map(exp => <ExperienceContainer showActionButtons={showActionButtons} key={exp.id} isEnglishMode={isEnglishMode} experience={exp} />)}
                </div>
            </>
        </ViewContainer>
    );
};