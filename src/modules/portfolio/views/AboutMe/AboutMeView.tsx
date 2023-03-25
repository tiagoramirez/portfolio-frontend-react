import { useSelector } from 'react-redux';
import { usePathInfo } from '../../../../hooks';
import { RootState } from '../../../../store';
import { EditButton, SectionContainer } from '../components';
import ParagraphWithBreakLine from '../components/ParagraphWithBreakLine';

export const AboutMeView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isEditPath, isOwnProfile } = usePathInfo();

    return (
        <SectionContainer title='Sobre mi'>
            <>
                {!isEditPath && isOwnProfile && <EditButton to='edit/about-me' isForProfile />}
            </>
            <>
                {
                    activeUser.hasEnglishAboutMe && isEnglishMode
                        ?
                        activeUser.englishAboutMe && <ParagraphWithBreakLine className='text-secondary text-justify' str={activeUser.englishAboutMe as string} />
                        :
                        activeUser.nativeAboutMe && <ParagraphWithBreakLine className='text-secondary text-justify' str={activeUser.nativeAboutMe as string} />
                }
            </>
        </SectionContainer >
    );
};
