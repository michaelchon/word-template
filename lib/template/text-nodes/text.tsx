import { TextComponent } from "@/components/Text";
import { fontSize } from "@/lib/doc/font-size";
import { TextRun } from "docx";
import { TextNode } from "./text-node";

export class Text extends TextNode {
    constructor(text: string) {
        super(text);
    }

    renderDoc() {
        return new TextRun({ text: this.text, size: fontSize(12) });
    }

    renderHtml() {
        return <TextComponent text={this.text} />;
    }
}
