import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ViewContainer } from '../../components';
import { EducationComponent } from '../components';

export const EducationView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    return (
        <ViewContainer title='Educacion' to='edit/educations'>
            <div className='divide-y divide-dashed divide-primary'>
                {activeUser.educations.map(educ => <EducationComponent key={educ.id} education={educ} isEnglishMode={isEnglishMode} />)}
            </div>
        </ViewContainer>
    );
};