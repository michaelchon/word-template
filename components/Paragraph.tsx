import { getKeyByValue } from "@/lib/get-key-by-value";
import { textAlignment } from "@/lib/text-alignment";
import { AlignmentType } from "docx";

interface Props {
    alignment?: AlignmentType;
    margin?: boolean;
}

export const ParagraphComponent: React.FC<Props> = ({
    children,
    alignment,
    margin,
}) => {
    const alignmentClass = getKeyByValue({
        obj: textAlignment,
        value: alignment || AlignmentType.LEFT,
    });

    const marginClass = !margin ? "paragraph--no-margin" : "";

    return (
        <div
            className={`paragraph flex flex-wrap items-center ${alignmentClass} ${marginClass}`}
        >
            {children}
        </div>
    );
};
