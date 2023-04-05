import { Small } from './Small';
import { useCounter } from "../hooks";
import { useState } from 'react';

export const Memorize = () => {

    let { counter, increment } = useCounter(10);
    let [ show, setShow ] = useState(true);

    return (
        <div>
            <h1>Counter <Small value={ counter } /></h1>
            <hr />

            <button
            className="btn btn-primary"
            onClick={ increment }>
                +1
            </button>

            <button
            className='btn btn-outline-primary'
            onClick={ () => setShow(!show) }>
                show/hide { JSON.stringify(show) }
            </button>
        </div>
    );
};
