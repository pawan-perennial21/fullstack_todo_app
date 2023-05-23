export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
}

export interface ITodo {
  title: string,
  status: boolean,
  id:number
}
