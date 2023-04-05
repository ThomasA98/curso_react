import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {

    const initialState = [
        {
            id: 1,
            description: "Demo TODO",
            done: false
        }
    ];

    test("debe de regresar el estado inicial", () => {

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);

    });

    test("Debe agregar un todo", () => {

        const newTodo = {
            id: 2,
            description: "nuevo todo de prueba",
            done: false
        };

        const action = {
            type: '[TODO] add todo',
            payload: newTodo
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain( newTodo );
        expect(newState).toEqual([...initialState, newTodo]);
    });

    test("Debe eliminar un todo", () => {

        const action = {
            type: '[TODO] remove todo',
            payload: { idTodo: 1 }
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);

    });

    test("Debe realizar el toggle del todo", () => {

        const action = {
            type: '[TODO] toggle todo done',
            payload: { idTodo: 1 }
        };

        /* como al inicio es false, aca lo cambia a true */
        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBeTruthy();
    });

});