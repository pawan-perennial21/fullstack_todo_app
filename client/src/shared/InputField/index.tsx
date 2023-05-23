import { ChangeEvent } from "react";
import { InputFieldProps } from "../../type";
import styles from "./index.module.css";

const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    type = "text",
    placeholder = "",
    disabled = false,
    required = false,
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={styles.inputFieldContainer}>
            <label className={styles.inputFieldLabel}>{label}</label>
            <input
                className={styles.inputField}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
            />
        </div>
    );
};

export default InputField;
