import { useMemo } from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroUrl = useMemo(() => `/assets/heroes/${id}.jpg` );
    
    return (
        <div className="col">
            <div className="card">
                <div className="row">
                    <div className="col-4">
                        <img className="img-fluid rounded-start" src={ heroUrl } alt={ id } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title" >{ superhero }</h5>

                            <p className="card-text">{ alter_ego }</p>
                            
                            {  characters === alter_ego || <p>{ characters }</p> }

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={ `/hero/${id}` }>
                                mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};