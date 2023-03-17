export default function ParagraphWithBreakLine({ str, className }: { str: string, className?: string }) {
    return (
        <p className={className}>
            {
                str.split('\n').map((line) =>
                    <>
                        {line}
                        <br />
                    </>
                )
            }
        </p>
    );
}
