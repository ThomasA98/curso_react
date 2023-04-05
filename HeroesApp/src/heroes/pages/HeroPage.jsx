import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(id), [ id ]);

    const onNavigateBack = () => {
        navigate(-1);
    };

    return(
        <>

        <div className="row mt-5">
            <div className="col-4">
                <img className="img-thumbnail" src={`/assets/heroes/${hero.id}.jpg`} alt="superhero" />
            </div>

            <div className="col-8">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego }</li>
                    <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego }</li>
                    <li className="list-group-item"><b>First appearence: </b>{ hero.first_appearance }</li>
                    <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego }</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ hero.characters }</p>

                <button 
                className="btn btn-primary"
                onClick={ onNavigateBack }>Back</button>
            </div>
        </div>

        { hero ? null : <Navigate to='/marvel' /> }
        </>
    );
};
