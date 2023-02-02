interface Props {
    title: string
    children: JSX.Element[] | JSX.Element,
}

export const AuthContainer = ({ children, title }: Props) => {
    return (
        <>
            <h1 className='mb-3 text-2xl uppercase font-semibold text-left'>{title}</h1>
            <div className="
                w-5/6 lg:w-1/2
                bg-secondary
                rounded-lg border border-primary
            ">
                {children}
            </div>
        </>
    );
};
