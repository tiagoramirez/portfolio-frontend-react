import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { EditButton, SectionContainer } from '../components';
import { EducationContainer } from './EducationContainer';

export const EducationView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isSameUserParamAuth } = useEdit();

    return (
        <SectionContainer title='Educacion'>
            <>
                {isSameUserParamAuth && <EditButton to='edit/educations' isForSection />}
                {activeUser.educations.map(educ => <EducationContainer key={educ.id} isEnglishMode={isEnglishMode} education={educ} />)}
            </>
        </SectionContainer>
    );
};