import { saludar } from './funciones_a_probar';

describe('pruebas', () => {

    test('primera prueba', () => {
        let nombre = 'javier';

        let elSaludo = saludar(nombre);

        expect(elSaludo).toBe(`este es un saludo para ${ nombre }`);
    });
    
});