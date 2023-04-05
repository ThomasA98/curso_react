import { useEffect, useReducer, useCallback } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';


const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {

    const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState, init);

    const deleteTodo = useCallback((idTodo) => {
        
        let action = {
            type: '[TODO] remove todo',
            payload: { idTodo }
        };

        dispatchTodo(action);

    });

    const onToggleTodoDone = useCallback((idTodo) => {

        let action = {
            type: '[TODO] toggle todo done',
            payload: { idTodo }
        };

        dispatchTodo(action);

    });

    const addTodo = (todoInput) => {

        let newTodo = {
            id: new Date().getTime(),
            description: todoInput,
            done: false
        };
        
        let action = {
            type: '[TODO] add todo',
            payload: newTodo
        };

        dispatchTodo(action);
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [ todos ]);

    return {
        todos,
        deleteTodo,
        onToggleTodoDone,
        addTodo, 
        todosCount: todos.length,
        pendingTodosCount: todos.filter(t => !t.done).length
    };
};
