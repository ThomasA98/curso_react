import { getHeroByIdAsync } from "./funciones_a_probar";

describe('prueba en promesas', () => {
    test('prueba a getHeroByIdAsync', (done) => {
        let id = 2;
        
        getHeroByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 2,
                    name: 'Spiderman',
                    owner: 'Marvel'
                });

                done();
            })
    })
})