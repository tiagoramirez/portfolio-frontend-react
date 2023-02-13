import { IconContainer } from './components';

interface Props {
    className?: string;
}

export const PreviousIcon = ({ className }: Props) => {
    return (
        <IconContainer className={className}>
            <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' strokeWidth='1.3' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <polyline points='15 6 9 12 15 18' />
            </svg>
        </IconContainer>
    );
};