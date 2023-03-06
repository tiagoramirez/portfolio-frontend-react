import { useSelector } from 'react-redux';
import { usePathInfo } from '../../../../hooks';
import { RootState } from '../../../../store';
import { EditButton, SectionContainer } from '../components';

export const AboutMeView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isEditPath, isOwnProfile } = usePathInfo();

    return (
        <SectionContainer title='Sobre mi'>
            <>
                {!isEditPath && isOwnProfile && <EditButton to='edit/profile' isForProfile />}
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
