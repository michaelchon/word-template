import { TextRun } from "docx";
import { TemplatePart } from "../template-part";

export abstract class TextNode extends TemplatePart {
    constructor(protected text: string) {
        super();
    }

    abstract renderDoc(): TextRun;
}
