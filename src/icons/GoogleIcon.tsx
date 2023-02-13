import { IconContainer } from './components';

interface Props {
    className?: string;
}

export const GoogleIcon = ({ className }: Props) => {
    return (
        <IconContainer className={className}>
            <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M17.788 5.108a9 9 0 1 0 3.212 6.892h-8' />
            </svg>
        </IconContainer>
    );
};
