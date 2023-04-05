import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe("Pruebas en <MultipleCustomHooks />", () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Debe de mostar el componente por defecto", () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        expect(screen.getByText('cargando...'));
        expect(screen.getByText('BreakingBad Api'));

        const nextButton = screen.getByRole('button', { name: "siguiente" });

        expect(nextButton.disabled).toBeTruthy();

    });

    test("Debe de mostar un quote", () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Tamiel', quote: 'Hello World' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        expect(screen.getByText('Hello World - Tamiel')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: "siguiente" });

        expect(nextButton.disabled).toBeFalsy();
    });

    test("Debe llamar la funcion incrementar", () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Tamiel', quote: 'Hello World' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole("button", { name: "siguiente" });

        const onClickIncrement = jest.fn(nextButton.onclick);

        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});