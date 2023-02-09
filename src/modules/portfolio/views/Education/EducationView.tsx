import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { AddBUtton, EditButton, SectionContainer } from '../components';
import { EducationContainer } from './EducationContainer';

export const EducationView = ({ isEdit }: { isEdit?: boolean }) => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isSameUserParamAuth, isEditingSection } = useEdit();

    return (
        <SectionContainer title='Educacion'>
            <>
                {isEdit && <AddBUtton />}
                {!isEditingSection && isSameUserParamAuth && <EditButton to='edit/educations' isForSection />}
                {activeUser.educations.map(educ => <EducationContainer isEdit={isEdit} key={educ.id} isEnglishMode={isEnglishMode} education={educ} />)}
            </>
        </SectionContainer>
    );
};