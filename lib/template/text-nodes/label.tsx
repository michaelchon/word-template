import { LabelComponent } from "@/components/Label";
import { fontSize } from "@/lib/doc/font-size";
import { TextRun } from "docx";
import { TextNode } from "./text-node";

export class Label extends TextNode {
    constructor(text: string) {
        super(text);
    }

    renderDoc() {
        return new TextRun({ text: this.text, size: fontSize(12), bold: true });
    }

    renderHtml() {
        return <LabelComponent text={this.text} />;
    }
}
