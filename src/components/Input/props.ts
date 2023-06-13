export interface InputProps {
    initialValue?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: "text" | "password" | "number" | "email";
    onChange:  (value: string) => void;
    onBlur?:  () => void;
}
