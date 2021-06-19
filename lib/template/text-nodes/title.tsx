import { TitleComponent } from "@/components/Title";
import { TextRun } from "docx";
import { fontSize } from "../../doc/font-size";
import { TextNode } from "./text-node";

export class Title extends TextNode {
    constructor(text: string) {
        super(text);
    }

    renderDoc() {
        return new TextRun({
            text: this.text,
            size: fontSize(14),
            bold: true,
        });
    }

    renderHtml() {
        return <TitleComponent text={this.text} />;
    }
}
