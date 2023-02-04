import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { SectionContainer } from '../components';

export const AboutMeView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    return (
        <SectionContainer title='Sobre mi'>
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
