import { useSelector } from 'react-redux';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, PortfolioIcon, TwitterIcon, WhatsappIcon, YoutubeIcon } from '../../../../icons';
import { RootState } from '../../../../store';

export const SocialMediaView = () => {

    const { activeUser } = useSelector((state: RootState) => state.portfolio);

    const smToIcon = (smName: string) => {
        switch (smName) {
            case 'Whatsapp': return <WhatsappIcon />;
            case 'Github': return <GithubIcon className='h-6 w-6' />;
            case 'LinkedIn': return <LinkedinIcon className='h-6 w-6' />;
            case 'Facebook': return <FacebookIcon className='h-6 w-6' />;
            case 'Youtube': return <YoutubeIcon className='h-6 w-6' />;
            case 'Instagram': return <InstagramIcon className='h-6 w-6' />;
            case 'Web Personal': return <PortfolioIcon className='h-6 w-6' />;
            case 'Twitter': return <TwitterIcon className='h-6 w-6' />;
        }
    };

    return (
        <div className='fixed right-2 sm:right-7 bottom-2 sm:bottom-5'>
            {
                activeUser.socialMedias.map(sm => (
                    <a href={sm.url} key={sm.id}>
                        {smToIcon(sm.socialMediaInfo.name)}
                    </a>
                ))
            }
        </div>
    );
};