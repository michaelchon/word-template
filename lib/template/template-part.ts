import { Document, Paragraph, TextRun } from "docx";

export abstract class TemplatePart {
    abstract renderDoc(): Document | Paragraph | TextRun;

    abstract renderHtml(): JSX.Element;
}
