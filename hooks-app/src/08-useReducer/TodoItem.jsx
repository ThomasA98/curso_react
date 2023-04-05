import { memo } from "react";

export const TodoItem = memo(({ id, description, done, deleteTodo, onToggleTodoDone }) => {

    const deleteTodoOnClick = () => {
        deleteTodo(id);
    };

    const onToggleTodoDoneOnClick = () => {
        onToggleTodoDone(id);
    };

    return (
        <li 
        className="list-group-item d-flex justify-content-between" 
        onClick={ onToggleTodoDoneOnClick }>

            <span 
            className={`align-self-center ${ done ? 'text-decoration-line-through' : '' }`}
            aria-label="span"
            >{ description }</span>

            <button 
            className="btn btn-danger" 
            onClick={ deleteTodoOnClick }
            >Borrar</button>
        
        </li>
    );
}
);