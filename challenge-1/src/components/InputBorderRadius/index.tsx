interface InputBorderRadiusProps {
    text: string;
}

export const InputBorderRadius = ({ text }: InputBorderRadiusProps) => {
    return (
        <label>
            {text}
            <input type="text" />
        </label>
    );
}