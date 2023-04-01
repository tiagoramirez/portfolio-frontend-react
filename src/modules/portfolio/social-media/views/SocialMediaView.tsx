import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { usePathInfo } from '../../../../hooks';
import { EditIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, PortfolioIcon, TwitterIcon, WhatsappIcon, YoutubeIcon } from '../../../../icons';
import { RootState } from '../../../../store';

const smToIcon = (smName: number) => {
    switch (smName) {
        case 0: return <FacebookIcon className='mb-6 sm:mb-2' />;
        case 1: return <GithubIcon className='mb-6 sm:mb-2' />;
        case 2: return <InstagramIcon className='mb-6 sm:mb-2' />;
        case 3: return <LinkedinIcon className='mb-6 sm:mb-2' />;
        case 4: return <TwitterIcon className='mb-6 sm:mb-2' />;
        case 5: return <PortfolioIcon className='mb-6 sm:mb-2' />;
        case 6: return <WhatsappIcon />;
        case 7: return <YoutubeIcon className='mb-6 sm:mb-2' />;
    }
};

export const SocialMediaView = () => {
    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const { isOwnProfile, isEditPath } = usePathInfo();

    return (
        <aside>
            {!isEditPath && isOwnProfile && <NavLink to='edit/social-media'><EditIcon className='mb-6 sm:mb-2' /></NavLink>}
            {
                activeUser.socialMedias.map(sm => (
                    <a target='_blank' rel='noreferrer' href={sm.url} key={sm.id}>
                        {smToIcon(sm.name)}
                    </a>
                ))
            }
        </aside>
    );
};