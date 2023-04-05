import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

    const [ counter, setCounter ] = useState(10);

    const increment2 = useCallback((incremento = 1) => {
        setCounter(prevValue => prevValue + incremento);
    }, []);

    const increment = () => setCounter(prevValue => prevValue + 1);
    
    return (
        <>
            <h1>useCallback hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment2 } />
        </>
    );
};
