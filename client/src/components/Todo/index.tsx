import Button from "../../shared/Button";
import InputField from "../../shared/InputField";
import {Dispatch, FormEvent, useState} from "react"
import { ITodo } from "../../type";
import styles from "./index.module.css";
interface TodoProps {
  todos: ITodo[],
  setTodos: Dispatch<React.SetStateAction<ITodo[]>>;
}
export default function Todo({todos,setTodos}: TodoProps) {
    const [item, setItem] = useState<string>("");

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleChange = (value: string) => {
        setItem(value);
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const payload = {
            title: item,
            status: false,
            id: Date.now(),
        };
        setTodos([...todos, { ...payload }]);
        setItem("");
    };
    return (
      <form className={styles.formContainer} onSubmit={handleSubmit}>
            <InputField
                label='Todo'
                value={item}
                onChange={handleChange}
                type='text'
                placeholder='Enter your todo item'
                required
            />
            <Button type='submit' disabled={false}>
                Add
            </Button>
        </form>
    );
}
