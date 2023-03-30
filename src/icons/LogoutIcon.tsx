export const LogoutIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' className={'w-5 sm:w-6 ' + (className || '')} viewBox='0 0 24 24' strokeWidth='1.3' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
            <path d='M7 12h14l-3 -3m0 6l3 -3' />
        </svg>
    );
};