import { Dispatch, SetStateAction } from "react";

interface Props {
    variant: string;
    chosenVariants: string[];
    setChosenVariants: Dispatch<SetStateAction<string[]>>;
}

const chooseColor = "bg-gray-300";

export const CombinationVariant: React.FC<Props> = ({
    variant,
    chosenVariants,
    setChosenVariants,
}) => {
    const choose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;

        if (!chosenVariants.includes(variant)) {
            setChosenVariants((prev) => [...prev, variant]);
            target.classList.add(chooseColor);
        } else {
            setChosenVariants((prev) =>
                prev.filter((item) => item !== variant)
            );
            target.classList.remove(chooseColor);
        }
    };

    return (
        <div
            className="px-4 py-2 rounded-lg bg-gray-200  text-xs cursor-pointer"
            onClick={choose}
        >
            {variant}
        </div>
    );
};
