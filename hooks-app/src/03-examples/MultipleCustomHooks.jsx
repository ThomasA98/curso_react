import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    return (
        <div>
            <h1>BreakingBad Api</h1>
            <hr />

            {
                isLoading
                ? <LoadingQuote />
                : <Quote data={ data } />
            }

            { hasError || data?.length <= 0 && <p>no se encontraron datos</p> }

            <button 
            className="btn btn-primary" 
            disabled={ isLoading } 
            onClick={ increment } 
            >siguiente</button>

            <button 
            className="btn btn-primary" 
            disabled={ isLoading } 
            onClick={ decrement } 
            >anterior</button>

        </div>
    );
};
