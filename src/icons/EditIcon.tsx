import { IconContainer } from './components';

interface Props {
    className?: string;
}

export const EditIcon = ({ className }: Props) => {
    return (
        <IconContainer className={className}>
            <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
                <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
                <line x1='16' y1='5' x2='19' y2='8' />
            </svg>
        </IconContainer>
    );
};
