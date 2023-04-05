import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en el <TodoItem />", () => {

    const todo = {
        id: 1,
        description: "Tarea por hacer",
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    /* { id, description, done, deleteTodo, onToggleTodoDone } */

    test("Debe de mostrar el componente del todo pendiente", () => {

        render(
            <TodoItem 
                id={ todo.id }
                done={ todo.done }
                description={ todo.description }
                deleteTodo={ onDeleteTodoMock }
                onToggleTodoDone={ onToggleTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).not.toContain('text-decoration-line-through');

    });

    test("Debe de mostrar el componente del todo como no pendiente", () => {

        render(
            <TodoItem 
                id={ todo.id }
                done={ true }
                description={ todo.description }
                deleteTodo={ onDeleteTodoMock }
                onToggleTodoDone={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test("span debe llamar al ToggleTodo al hacer click", () => {

        render(
            <TodoItem 
                id={ todo.id }
                done={ todo.done }
                description={ todo.description }
                deleteTodo={ onDeleteTodoMock }
                onToggleTodoDone={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
        
    });

    test("el button debe llamar al delete al hacer click", () => {

        render(
            <TodoItem 
                id={ todo.id }
                done={ todo.done }
                description={ todo.description }
                deleteTodo={ onDeleteTodoMock }
                onToggleTodoDone={ onToggleTodoMock }
            />
        );

        const deleteButton = screen.getByRole('button');

        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
        
    });

});