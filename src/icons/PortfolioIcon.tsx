export const PortfolioIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' className={'w-5 sm:w-6 ' + (className || '')} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <rect x='3' y='7' width='18' height='13' rx='2' />
            <path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2' />
            <line x1='12' y1='12' x2='12' y2='12.01' />
            <path d='M3 13a20 20 0 0 0 18 0' />
        </svg>
    );
};