interface Props {
    text: string;
}

export const TextComponent: React.FC<Props> = ({ text }) => {
    return <div className="paragraph__text whitespace-pre-wrap">{text}</div>;
};
