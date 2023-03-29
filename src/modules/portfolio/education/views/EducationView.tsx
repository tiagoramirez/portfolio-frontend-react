import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ViewContainer } from '../../components';
import { EducationContainer } from './EducationContainer';

export const EducationView = ({ showActionButtons }: { showActionButtons?: boolean }) => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);


    return (
        <ViewContainer title='Educacion' to='edit/educations'>
            <div className='divide-y divide-dashed divide-primary'>
                {activeUser.educations.map(educ => <EducationContainer showActionButtons={showActionButtons} key={educ.id} isEnglishMode={isEnglishMode} education={educ} />)}
            </div>
        </ViewContainer>
    );
};