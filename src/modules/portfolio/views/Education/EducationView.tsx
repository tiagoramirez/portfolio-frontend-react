import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { AddBUtton, EditButton, SectionContainer } from '../components';
import { EducationContainer } from './EducationContainer';

export const EducationView = ({ isEdit }: { isEdit?: boolean }) => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isLoggedUserProfile, isEditParam } = useEdit();

    return (
        <SectionContainer title='Educacion'>
            <>
                {isEdit && <AddBUtton />}
                {!isEditParam && isLoggedUserProfile && <EditButton to='edit/educations' isForProfile />}
                <div className='divide-y divide-dashed divide-primary'>
                    {activeUser.educations.map(educ => <EducationContainer isEdit={isEdit} key={educ.id} isEnglishMode={isEnglishMode} education={educ} />)}
                </div>
            </>
        </SectionContainer>
    );
};