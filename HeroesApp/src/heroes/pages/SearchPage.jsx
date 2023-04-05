import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {

    console.log('holaaa');

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const { onInputChange, searchText } = useForm({
        searchText: q
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();

        if (searchText.trim().length < 1) return;

        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit} aria-label='form'>
                        <input
                            type="text"
                            placeholder="search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off" 
                            value={ searchText }
                            onChange={ onInputChange }/>

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className={`alert alert-primary ${(q.length > 1 || heroes.length > 0) && 'visually-hidden'}`}>
                        Search a hero
                    </div>

                    <div className={`alert alert-danger ${(q === '' || heroes.length > 0) && 'visually-hidden'}`}>
                        No hero with <b>{ q }</b>
                    </div>

                    {heroes?.map(h => <HeroCard key={h.id} {...h} />)}
                </div>

            </div>
        </>
    );
};