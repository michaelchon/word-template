import { ParagraphComponent } from "@/components/Paragraph";
import { AlignmentType, Paragraph as docxParagraph } from "docx";
import React from "react";
import { TemplatePart } from "./template-part";
import { TextNode } from "./text-nodes/text-node";

export class Paragraph extends TemplatePart {
    constructor(
        private textNodes: TextNode[],
        private options: ParagraphOptions = { margin: true }
    ) {
        super();
    }

    renderDoc() {
        const children = this.textNodes.map((element) => element.renderDoc());

        return new docxParagraph({
            children,
            alignment: this.options?.alignment,
        });
    }

    renderHtml() {
        const children = this.textNodes.map((element, i) => (
            <React.Fragment key={i}>{element.renderHtml()}</React.Fragment>
        ));

        return (
            <ParagraphComponent
                alignment={this.options.alignment}
                margin={this.options.margin}
            >
                {children}
            </ParagraphComponent>
        );
    }
}

interface ParagraphOptions {
    alignment?: AlignmentType;
    margin?: boolean;
}
