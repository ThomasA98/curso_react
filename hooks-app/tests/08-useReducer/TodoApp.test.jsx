import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos');

describe("Pruebas en <TodoApp />", () => {

    const todo1 = {
        id: 1,
    description: "tarea uno",
        done: false
    };

    const todo2 = {
        id: 2,
        description: "tarea dos",
        done: true
    };

    useTodos.mockReturnValue({
        todos: [ todo1, todo2 ], 
        todosCount: 2, 
        pendingTodosCount: 1, 
        deleteTodo: jest.fn(), 
        onToggleTodoDone: jest.fn(), 
        addTodo: jest.fn()
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("debe de mostrar el componente correctamente", () => {

        render( <TodoApp /> );

        expect(screen.getByText('tarea uno')).toBeTruthy();
        expect(screen.getByText('tarea dos')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});