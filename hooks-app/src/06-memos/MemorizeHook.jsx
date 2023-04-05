import { Small } from './Small';
import { useCounter } from "../hooks";
import { useState } from 'react';
import { useMemo } from 'react';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("hey hey hey");        
    }

    return iterationNumber;
};

export const MemorizeHook = () => {

    let { counter, increment } = useCounter(10);
    let [ show, setShow ] = useState(true);

    const counterMemo = useMemo(() => {
        return heavyStuff(counter);
    }, [ counter ]);

    return (
        <div>
            <h1>Counter <Small value={ counter } /></h1>
            <hr />

            <h4>{ counterMemo } iteraciones realizadas</h4>

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
