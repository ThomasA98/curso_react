import { useState } from 'react';

export const useCounter = (inicialValue = 1) => {

    const [ counter, setCounter ] = useState(inicialValue);

    return {
        counter,
        increment: (value = 1) => setCounter(prevValue => prevValue + value),
        decrement: (value = 1) => {
            if (counter === 0) return;
            setCounter(prevValue => prevValue - value)
        },
        reset: () => setCounter(inicialValue)
    };
};