import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ParagraphWithBreakLine, ViewContainer } from '../../components';

export const AboutMeView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    return (
        <ViewContainer title='Sobre mi' to='edit/about-me'>
            <>
                {
                    activeUser.hasEnglishAboutMe && isEnglishMode
                        ?
                        activeUser.englishAboutMe && <ParagraphWithBreakLine className='text-secondary text-justify' str={activeUser.englishAboutMe as string} />
                        :
                        activeUser.nativeAboutMe && <ParagraphWithBreakLine className='text-secondary text-justify' str={activeUser.nativeAboutMe as string} />
                }
            </>
        </ViewContainer >
    );
};
