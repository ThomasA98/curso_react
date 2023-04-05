
export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [ ...initialState, action.payload ];

        case '[TODO] remove todo':
            return initialState.filter(todo => todo.id !== action.payload.idTodo);

        case '[TODO] toggle todo done':
            return initialState.map(
                todo => todo.id === action.payload.idTodo 
                ? { ...todo, done: !todo.done } 
                : todo
            );
    
        default:
            return initialState;
    }
};