import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from './components/CounterApp';

describe('Testeando el componente <CounterApp />', () => {

    let initialCounter = 100;

    test('debe hacer match con el snapshot', () => {
        
        let { container } = render(<CounterApp value={initialCounter} />);

        expect(container).toMatchSnapshot();

    });

    test('debe mostrar el valor inicial', () => {
        
        render(<CounterApp value={initialCounter} />);
    
        expect(screen.getAllByText(initialCounter)).toBeTruthy();
    });

    test('debe incrementar con el boton increment', () => {

        render(<CounterApp value={initialCounter} />);

        fireEvent.click(screen.getByText('increment'));

        expect(screen.getByText(initialCounter + 1)).toBeTruthy();

    });

    test('debe decrementar con el boton decrement', () => {

        render(<CounterApp value={initialCounter} />);

        fireEvent.click(screen.getByText('decrement'));

        expect(screen.getByText(initialCounter - 1)).toBeTruthy();

    });

    test('debe resetear al valor iniciala con el boton reset', () => {

        render(<CounterApp value={initialCounter} />);

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(initialCounter.toString());

    });

});