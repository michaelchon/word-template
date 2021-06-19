interface Props {
    text: string;
}

export const SubtitleComponent: React.FC<Props> = ({ text }) => {
    return <div className="text-lg font-semibold">{text}</div>;
};
