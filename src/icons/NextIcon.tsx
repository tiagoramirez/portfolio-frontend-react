export const NextIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' className={'w-5 sm:w-6 ' + (className || '')} viewBox='0 0 24 24' strokeWidth='1.3' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <polyline points='9 6 15 12 9 18' />
        </svg>
    );
};