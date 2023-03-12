import { createContext } from "react";
import { Todo } from "./components/Todo";

type TodoContextType = Array<Todo> | null;

const TodoContext = createContext<TodoContextType>([]);

export default TodoContext;