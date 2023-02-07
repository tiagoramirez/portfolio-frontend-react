interface Props {
    className?: string;
    children: JSX.Element;
}

export const IconContainer = ({ className, children }: Props) => {
    return (
        <div className={`flex items-center justify-center overflow-hidden ${className}`}>
            {children}
        </div>
    );
};
