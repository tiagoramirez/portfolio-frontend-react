export const NewUserIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' className={'w-5 sm:w-6 ' + (className || '')} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <circle cx='9' cy='7' r='4' />
            <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
            <path d='M16 11h6m-3 -3v6' />
        </svg>
    );
};
