import { act } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/userContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {

    test('debeb de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe('null');

    });

    test('debe llamar al setUser al hacer click en el button', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null , setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const loginButton = screen.getByRole('button');

        fireEvent.click(loginButton);
        
        expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: 'tamiel', email: 'tamiel@g.com' });
        
    });

});