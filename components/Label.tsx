interface Props {
    text: string;
}

export const LabelComponent: React.FC<Props> = ({ text }) => {
    return <div className="font-medium">{text}</div>;
};
