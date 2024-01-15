import { type ListOfTodos } from "../types";
import { Todo } from "./Todo";

interface Props {
    todos: ListOfTodos;
    onToggleCompleteTodo: (id: string, completed: boolean) => void;
    onRemoveTodo: (id: string) => void;
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => { //<Props> estos so los parámetros de los tipos de datos que se van a recibir
    return (
    <ul className="todo-list">
        {todos.map(todo => (
            <li 
                key={todo.id}
                className={`${todo.completed ? "completed" : ''}`}>
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onRemoveTodo={onRemoveTodo}
                    onToggleCompleteTodo={onToggleCompleteTodo}
                />
            </li>
        ))}
    </ul>
    )
}