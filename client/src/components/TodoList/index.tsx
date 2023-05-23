import { ITodo } from "../../type"

interface Props {
  todos:ITodo[]
}
export default function TodoList({ todos }:Props) {
  return (
    <div>{todos.map((el) => <div key ={el.id}>
      {el.title }
    </div>)}</div>
  )
}
