import { CombinationComponent } from "@/components/Combination";
import { fontSize } from "@/lib/doc/font-size";
import { TextRun } from "docx";
import { useEffect, useState } from "react";
import { TextNode } from "./text-node";

export class Combination extends TextNode {
    constructor(private options: CombinationOptions) {
        super("");
    }

    renderDoc() {
        return new TextRun({ text: this.text, size: fontSize(12) });
    }

    renderHtml() {
        const [chosenVariants, setChosenVariants] = useState<string[]>([]);

        useEffect(() => {
            this.text = chosenVariants.join(", ");
        }, [chosenVariants]);

        return (
            <CombinationComponent
                variants={this.options.variants}
                chosenVariants={chosenVariants}
                setChosenVariants={setChosenVariants}
            />
        );
    }
}

interface CombinationOptions {
    variants: string[];
}
