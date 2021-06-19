import { SubtitleComponent } from "@/components/Subtitle";
import { TextRun } from "docx";
import { fontSize } from "../../doc/font-size";
import { TextNode } from "./text-node";

export class Subtitle extends TextNode {
    constructor(text: string) {
        super(text);
    }

    renderDoc() {
        return new TextRun({
            text: this.text,
            size: fontSize(12),
            bold: true,
        });
    }

    renderHtml() {
        return <SubtitleComponent text={this.text} />;
    }
}
