import { render, fireEvent, screen } from "@testing-library/react";
import { GifExpertApp } from '..';

describe("pruebas en el componente <GifExpertApp />", () => {

    test("debe de tener un estado inicial en money", () => {

        render( <GifExpertApp /> );

        expect(screen.getByText("money")).toBeTruthy();
    
    });

    test("debe poder cambiar a un nuevo estado", () => {

        const newInputValue = "neko";

        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newInputValue } });

        fireEvent.submit(form);
        
        expect(screen.getByText(newInputValue)).toBeTruthy();
    
    });

});