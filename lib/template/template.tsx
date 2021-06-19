import { Document } from "docx";
import React from "react";
import { Paragraph } from "./paragraph";
import { TemplatePart } from "./template-part";

export class Template extends TemplatePart {
    constructor(public filename: string, private paragraphs: Paragraph[]) {
        super();
    }

    renderDoc() {
        const paragraphs = this.paragraphs.map((paragraph) =>
            paragraph.renderDoc()
        );

        return new Document({
            title: this.filename,
            sections: [
                {
                    children: paragraphs,
                },
            ],
        });
    }

    renderHtml() {
        const paragraphs = this.paragraphs.map((paragraph, i) => (
            <React.Fragment key={i}>{paragraph.renderHtml()}</React.Fragment>
        ));

        return <>{paragraphs}</>;
    }
}
