import { ChangeEvent, useState } from "react";
import "./styles.css";

interface InputBorderRadiusProps {
    text: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>, direction: string) => void;
    direction: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

export const InputBorderRadius = ({ text, handleChange, direction }: InputBorderRadiusProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value))) {
            setInputValue(value);
        }
    }

    return (
        <label className="border-radius_label">
            {text}
            <input
                onChange={(e) => {
                    handleInputValue(e);
                    handleChange(e, direction);
                }}
                value={inputValue}
                className="border-radius_input"
                type="text"
            />
        </label>
    );
}