import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], deleteTodo, onToggleTodoDone }) => {

    return (
        <div className="col-7">
            <ul className="list-group">
                {
                    todos.map(todo => (
                        <TodoItem 
                        key={ todo.id } 
                        id={ todo.id }
                        done={ todo.done }
                        description={ todo.description }
                        deleteTodo={ deleteTodo }
                        onToggleTodoDone={ onToggleTodoDone }
                        />
                    ))
                }
            </ul>
        </div>
    );
};