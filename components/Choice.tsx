import { Dispatch, SetStateAction } from "react";

interface Props {
    variants: string[];
    choice: string;
    setChoice: Dispatch<SetStateAction<string>>;
}

export const ChoiceComponent: React.FC<Props> = ({
    variants,
    choice,
    setChoice,
}) => {
    const options = variants.map((variant, i) => (
        <option key={i} value={variant}>
            {variant}
        </option>
    ));

    return (
        <select
            className="px-4 py-2 rounded-lg bg-gray-200 text-xs focus:outline-none"
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
        >
            {options}
        </select>
    );
};
