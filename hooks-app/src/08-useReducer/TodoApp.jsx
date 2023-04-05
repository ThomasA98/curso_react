import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
    
    const { todos, todosCount, pendingTodosCount, deleteTodo, onToggleTodoDone, addTodo } = useTodos();

    return (
        <div>
            <h1>TodoApp: { todosCount } <small>Pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <TodoList 
                todos={ todos } 
                deleteTodo={ deleteTodo } 
                onToggleTodoDone={ onToggleTodoDone }/>

                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />

                    <TodoAdd onSubmitAddTodo={ addTodo }/>
                </div>
            </div>

        </div>
    );
};