import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/userContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Pruebas en <HomePage />', () => {

    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre')

        expect(preTag.innerHTML).toBe('null');
    });

    test('Debe de mostrar el componente con el usuario', () => {

        const user = { 
            name: 'Tamiel' 
        };

        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const smallElement = screen.getByLabelText('small');
        const preTag = screen.getByLabelText('pre')

        expect(smallElement.innerHTML).toEqual(user.name);
        expect(preTag.innerHTML).toContain(user.name);

    });

    test('', () => { });

});