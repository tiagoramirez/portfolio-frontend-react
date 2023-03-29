import { useSelector } from 'react-redux';
import { usePathInfo } from '../../../../hooks';
import { RootState } from '../../../../store';
import { EditButton, ParagraphWithBreakLine } from '../../components';

export const ProfileView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { isOwnProfile, isEditPath } = usePathInfo();

    return (
        <div className='view-container mt-16'>
            {!isEditPath && isOwnProfile && <EditButton to='edit/profile' isForProfile />}
            <div className='flex justify-center'>
                <img
                    src='./src/assets/profileImg.png'
                    className='
                        w-[100px] sm:w-[150px]
                        absolute -top-16
                        shadow-xl rounded-full border-none
                    '
                />
            </div>
            <div className='text-center mt-5 sm:mt-20'>
                <h3 className='text-3xl font-semibold mb-2'>{activeUser.name}</h3>
                {activeUser.locationState && activeUser.locationCountry && <div className='text-xs font-light text-secondary uppercase'> {activeUser.locationState}, {activeUser.locationCountry}</div>}
            </div>
            {
                activeUser.hasEnglishDesc && isEnglishMode
                    ?
                    activeUser.englishDesc && <ParagraphWithBreakLine className='mt-3 pt-3 px-6 text-secondary border-t border-primary text-center' str={activeUser.englishDesc as string} />
                    :
                    activeUser.nativeDesc && <ParagraphWithBreakLine className='mt-3 pt-3 px-6 text-secondary border-t border-primary text-center' str={activeUser.nativeDesc as string} />
            }
        </div>
    );
};