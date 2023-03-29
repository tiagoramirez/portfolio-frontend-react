import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { usePathInfo } from '../../../../hooks';
import { EditIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, PortfolioIcon, TwitterIcon, WhatsappIcon, YoutubeIcon } from '../../../../icons';
import { RootState } from '../../../../store';

const smToIcon = (smName: string) => {
    switch (smName) {
        case 'Whatsapp': return <WhatsappIcon />;
        case 'Github': return <GithubIcon className='mb-2 h-6 w-6' />;
        case 'LinkedIn': return <LinkedinIcon className='mb-2 h-6 w-6' />;
        case 'Facebook': return <FacebookIcon className='mb-2 h-6 w-6' />;
        case 'Youtube': return <YoutubeIcon className='mb-2 h-6 w-6' />;
        case 'Instagram': return <InstagramIcon className='mb-2 h-6 w-6' />;
        case 'Web Personal': return <PortfolioIcon className='mb-2 h-6 w-6' />;
        case 'Twitter': return <TwitterIcon className='mb-2 h-6 w-6' />;
    }
};

export const SocialMediaView = () => {
    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const { isOwnProfile, isEditPath } = usePathInfo();

    return (
        <div className='fixed right-2 sm:right-7 bottom-2'>
            {!isEditPath && isOwnProfile && <NavLink to='edit/social-media'><EditIcon className='h-6 mb-2 hover:text-accent' /></NavLink>}
            {
                activeUser.socialMedias.map(sm => (
                    <a className='hover:text-accent' href={sm.url} key={sm.id}>
                        {smToIcon(sm.name)}
                    </a>
                ))
            }
        </div>
    );
};