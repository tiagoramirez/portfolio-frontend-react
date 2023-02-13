interface Props {
    children: JSX.Element[] | JSX.Element;
    title: string;
}

export const SectionContainer = ({ children, title }: Props) => {
    return (
        <div className='
            relative
            w-4/5 lg:w-1/2 py-3 px-6 my-3
            flex flex-col
            break-words border border-primary rounded-lg'
        >
            <h1 className='
                    mb-3 pb-2
                    border-b border-b-primary text-xl sm:text-2xl font-semibold text-left'
            >
                {title}
            </h1>
            {children}
        </div>
    );
};
