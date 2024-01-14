import { type ListOfTodos } from "../types";

interface Props {
    todos: ListOfTodos;
}

export const Todos: React.FC<Props> = ({ todos }) => { //<Props> estos so los parámetros de los tipos de datos que se van a recibir
    return (
    <ul>
        {todos.map(todo => (
            <li key={todo.id}>
                {todo.title}
            </li>
        ))}
    </ul>
    )
}