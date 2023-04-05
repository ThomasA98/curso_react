import { useState } from "react";

const longitudMinimaRequerida = 1;

export const TodoAdd = ({ onSubmitAddTodo }) => {

    
    const [ todoInput, setTodoInput] = useState('');
    
    const handlerChange = (e) => {
        setTodoInput(e.target.value);
    };

    const onSubmit = event => {
        event.preventDefault();

        if (todoInput < longitudMinimaRequerida) return;

        onSubmitAddTodo(todoInput);

        setTodoInput('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text" 
            placeholder="¿Que hay que hacer?" 
            className="form-control" 
            value={ todoInput } 
            onChange={ handlerChange } />

            <input type="submit" value="Submit" className="btn btn-outline-primary mt-1" />
        </form>
    );
};
