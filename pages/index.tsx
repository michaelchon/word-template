import { downloadDoc } from "@/lib/doc/download";
import { template } from "@/lib/template";

export default function Home() {
    const download = async () => {
        await downloadDoc();
    };

    return (
        <div className="select-none">
            {template.renderHtml()}

            <button
                className="mt-8 px-4 py-2 bg-green-600 text-white focus:outline-none rounded-lg"
                onClick={download}
            >
                Загрузить
            </button>
        </div>
    );
}
