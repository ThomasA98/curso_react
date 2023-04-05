import { heroes, validPublishers } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    if (validPublishers[publisher]) {
        throw new Error(`${publisher} no es valido`);
    }

    return heroes.filter( f => f.publisher === publisher);
};