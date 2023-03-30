import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ViewContainer } from '../../components';
import { ExperienceComponent } from '../components';

export const ExperienceView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    return (
        <ViewContainer title='Experiencia' to='edit/experiences'>
            <>
                <div className='divide-y divide-dashed divide-primary'>
                    {activeUser.experiences.map(exp => <ExperienceComponent key={exp.id} isEnglishMode={isEnglishMode} experience={exp} />)}
                </div>
            </>
        </ViewContainer>
    );
};