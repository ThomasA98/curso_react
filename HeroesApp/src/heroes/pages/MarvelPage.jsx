import { HeroesList } from "../components";
import { validPublishers } from "../data/heroes";

export const MarvelPage = () => {
    return(
        <>
        <h1>MarvelPage</h1>
        <hr />

        <HeroesList publisher={ validPublishers.MARVEL } />
        </>
    );
};
