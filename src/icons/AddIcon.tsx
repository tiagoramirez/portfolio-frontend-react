import { IconContainer } from './components';

interface Props {
    className?: string;
}

export const AddIcon = ({ className }: Props) => {
    return (
        <IconContainer className={className}>
            <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <rect x='4' y='4' width='16' height='16' rx='2' />
                <line x1='9' y1='12' x2='15' y2='12' />
                <line x1='12' y1='9' x2='12' y2='15' />
            </svg>
        </IconContainer>
    );
};
