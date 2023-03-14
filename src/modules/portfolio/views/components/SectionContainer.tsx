interface Props {
    children: JSX.Element[] | JSX.Element;
    title: string;
}

export const SectionContainer = ({ children, title }: Props) => {
    return (
        <div className='view-container'>
            <h1 className='pb-2 mb-2 border-b border-b-primary sm:text-xl font-semibold text-left'>{title}</h1>
            {children}
        </div>
    );
};
