import { useSelector } from 'react-redux';
import { usePathInfo } from '../../../../hooks';
import { RootState } from '../../../../store';
import { AddBUtton, EditButton, SectionContainer } from '../../components';
import { EducationContainer } from './EducationContainer';

export const EducationView = ({ showActionButtons }: { showActionButtons?: boolean }) => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isOwnProfile, isEditPath } = usePathInfo();

    return (
        <SectionContainer title='Educacion'>
            <>
                {showActionButtons && <AddBUtton />}
                {!isEditPath && isOwnProfile && <EditButton to='edit/educations' isForProfile />}
                <div className='divide-y divide-dashed divide-primary'>
                    {activeUser.educations.map(educ => <EducationContainer showActionButtons={showActionButtons} key={educ.id} isEnglishMode={isEnglishMode} education={educ} />)}
                </div>
            </>
        </SectionContainer>
    );
};