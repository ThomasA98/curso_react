import { heroes } from './datas/heroes';

export const saludar = ( name ) => {
    return `este es un saludo para ${ name }`;
};

export const getUser = () => ({
    uid: 'ABC123',
    username: 'El_papi1502'
});

export const getActiveUser = (name = 'esto debe ser un nombre de usuario valido') => ({
    uid: 'ABC123',
    username: name
});

export const getHeroById = (id) => heroes.find(h => h.id === id);

export const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let hero = getHeroById(id);

            hero ? resolve(hero) : reject('No se pudo encontrar al heroe');

        }, 1000);

    });

};

export const getHeroByOwner = (owner) => heroes.filter(h => h.owner === owner);