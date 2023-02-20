import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { EditButton, SectionContainer } from '../components';

export const AboutMeView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isLoggedUserProfile, isEditParam } = useEdit();

    return (
        <SectionContainer title='Sobre mi'>
            <>
                {!isEditParam && isLoggedUserProfile && <EditButton to='edit/profile' isForProfile />}
            </>
            <h1 className='text-secondary mt-2 text-sm sm:text-base text-justify'>
                {
                    activeUser.hasEnglishAboutMe && isEnglishMode
                        ?
                        activeUser.englishAboutMe
                        :
                        activeUser.nativeAboutMe
                }
            </h1>
        </SectionContainer>
    );
};
