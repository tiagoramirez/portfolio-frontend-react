export const YoutubeIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' className={'w-5 sm:w-6 ' + (className || '')} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <rect x='3' y='5' width='18' height='14' rx='4' />
            <path d='M10 9l5 3l-5 3z' />
        </svg>
    );
};