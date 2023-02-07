interface Props { actionName: string }

export const AuthActionButton = ({ actionName }: Props) => {
    return (
        <button type="submit" className="transition duration-200 ease-in-out bg-btnSecondary border border-primary hover:bg-btnPrimary text-secondary w-full py-2 mt-1 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">{actionName}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
    );
};
