import "./styles.css";

interface InputBorderRadiusProps {
    text: string;
}

export const InputBorderRadius = ({ text }: InputBorderRadiusProps) => {
    return (
        <label className="border-radius_label">
            {text}
            <input className="border-radius_input" type="text" />
        </label>
    );
}