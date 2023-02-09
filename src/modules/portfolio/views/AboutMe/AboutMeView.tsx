import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useEdit } from '../../hooks';
import { EditButton, SectionContainer } from '../components';

export const AboutMeView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isSameUserParamAuth } = useEdit();

    return (
        <SectionContainer title='Sobre mi'>
            <>
                {isSameUserParamAuth && <EditButton to='edit/about-me' isForSection />}
            </>
            <h1 className='text-secondary text-sm sm:text-base text-justify'>
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
