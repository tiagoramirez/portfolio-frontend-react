import { IconContainer } from './components';

interface Props {
    className?: string;
}

export const LoginIcon = ({ className }: Props) => {
    return (
        <IconContainer className={className}>
            <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' strokeWidth='1.3' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
                <path d='M20 12h-13l3 -3m0 6l-3 -3' />
            </svg>
        </IconContainer>
    );
};