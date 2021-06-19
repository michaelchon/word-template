import { Packer } from "docx";
import { saveAs } from "file-saver";
import { template } from "../template";

export const downloadDoc = async () => {
    const doc = template.renderDoc();

    const blob = await Packer.toBlob(doc);

    saveAs(blob, template.filename + ".docx");
};
