import { CombinationVariant } from "@/components/CombinationVariant";
import { Dispatch, SetStateAction } from "react";

interface Props {
    variants: string[];
    chosenVariants: string[];
    setChosenVariants: Dispatch<SetStateAction<string[]>>;
}

export const CombinationComponent: React.FC<Props> = ({
    variants,
    chosenVariants,
    setChosenVariants,
}) => {
    const html = variants.map((variant, i) => (
        <CombinationVariant
            key={i}
            variant={variant}
            chosenVariants={chosenVariants}
            setChosenVariants={setChosenVariants}
        />
    ));

    return <>{html}</>;
};
