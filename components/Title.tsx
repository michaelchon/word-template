interface Props {
    text: string;
}

export const TitleComponent: React.FC<Props> = ({ text }) => {
    return <div className="text-xl font-semibold">{text}</div>;
};
