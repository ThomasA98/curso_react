import { getActiveUser, getUser } from "./funciones_a_probar";

describe('probando funciones que retornan objetos', () => {
    
    test('probando funcion getUser', () => {
        let testUser = {
            uid: 'ABC123',
            username: 'El_papi1502'
        };

        let user = getUser();

        expect(user).toStrictEqual(testUser);
    });

    test('probando funcion getActiveUser con argumento', () => {
        let name = 'Alexander';

        let user = getActiveUser(name);

        expect(user).toStrictEqual({uid: 'ABC123', username: name})
    });

    test('probando funcion getActiveUser sin argumento', () => {
        let name = 'Alexander';

        let user = getActiveUser();

        expect(user).toStrictEqual({uid: 'ABC123', username: 'esto debe ser un nombre de usuario valido'})
    });
});