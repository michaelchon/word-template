import { InputComponent } from "@/components/Input";
import { fontSize } from "@/lib/doc/font-size";
import { TextRun } from "docx";
import { useEffect, useState } from "react";
import { TextNode } from "./text-node";

export class Input extends TextNode {
    constructor(text: string = "", private options: InputOptions) {
        super(text);
    }

    renderDoc() {
        return new TextRun({ text: this.text, size: fontSize(12) });
    }

    renderHtml() {
        const [value, setValue] = useState(this.text);

        useEffect(() => {
            this.text = value;
        }, [value]);

        return (
            <InputComponent
                type={this.options.type}
                value={value}
                setValue={setValue}
            />
        );
    }
}

export interface InputOptions {
    type: string;
}
