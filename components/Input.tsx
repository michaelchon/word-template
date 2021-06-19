import { Dispatch, SetStateAction } from "react";

interface Props {
    type: string;
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
}

export const InputComponent: React.FC<Props> = ({ type, value, setValue }) => {
    return (
        <input
            className="border-b-2 border-gray-600 focus:outline-none"
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};
