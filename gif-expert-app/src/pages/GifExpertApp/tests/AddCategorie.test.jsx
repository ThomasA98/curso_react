import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategorie } from "../components/AddCategorie";

describe("pruebas en el componente <AddCatagorie />", () => {

    test("debe cambiar el valor de la caja de texto", () => {

        render(<AddCategorie onSubmitCategorie={() => {}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'neko' } });

        expect(input.value).toBe('neko');

    });

    test("debe agregar la categoria si input tiene un valor", () => {

        let inputValue = 'neko';
        let onSubmitCategorie = jest.fn();

        render(<AddCategorie onSubmitCategorie={ onSubmitCategorie } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onSubmitCategorie).toHaveBeenCalled();

        expect(onSubmitCategorie).toHaveBeenCalledTimes(1);

        expect(onSubmitCategorie).toHaveBeenCalledWith(inputValue);

    });

    test("no se debe llamar al submit si el input esta vacio", () => {

        let onSubmitCategorie = jest.fn();

        render(<AddCategorie onSubmitCategorie={ onSubmitCategorie } />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onSubmitCategorie).toHaveBeenCalledTimes(0);

    });

});