import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {

    let nameHero = name.toLowerCase().trim();

    return name.length > 0 
    ? heroes.filter(hero => hero.superhero.toLowerCase().includes(nameHero))
    : [];
};