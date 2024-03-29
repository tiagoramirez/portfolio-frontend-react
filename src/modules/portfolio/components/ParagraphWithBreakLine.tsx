export const ParagraphWithBreakLine = ({ str, className }: { str: string, className?: string }) => {
    return (
        <div className={className}>
            {
                str.split('\n').map((line, i) =>
                    <p key={i} className='break-words'>
                        {line}
                        <br />
                    </p>
                )
            }
        </div>
    );
};