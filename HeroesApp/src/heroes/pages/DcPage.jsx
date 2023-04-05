import { HeroesList } from "../components";
import { validPublishers } from "../data/heroes";

export const DcPage = () => {
    return(
        <>
        <h1>DC Comics</h1>
        <hr />

        <HeroesList publisher={ validPublishers.DC } />
        </>
    );
};