import { ChoiceComponent } from "@/components/Choice";
import { fontSize } from "@/lib/doc/font-size";
import { TextRun } from "docx";
import { useEffect, useState } from "react";
import { TextNode } from "./text-node";

export class Choice extends TextNode {
    constructor(private options: ChoiceOptions) {
        super("");
    }

    renderDoc() {
        return new TextRun({ text: this.text, size: fontSize(12) });
    }

    renderHtml() {
        const [choice, setChoice] = useState(this.options.variants[0]);

        useEffect(() => {
            this.text = choice;
        }, [choice]);

        return (
            <ChoiceComponent
                variants={this.options.variants}
                choice={choice}
                setChoice={setChoice}
            />
        );
    }
}

interface ChoiceOptions {
    variants: string[];
}
