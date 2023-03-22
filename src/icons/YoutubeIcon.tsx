import { IconContainer } from './components';

interface Props {
    className?: string;
}

export const YoutubeIcon = ({ className }: Props) => {
    return (
        <IconContainer className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="4" />
                <path d="M10 9l5 3l-5 3z" />
            </svg>
        </IconContainer>
    );
};