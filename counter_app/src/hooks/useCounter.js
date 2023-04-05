import { useState } from 'react';

export const useCounter = (value) => {

    const [counterValue, setCounterValue] = useState(value);

    const functionsCounter = {
        increment: () => setCounterValue(prevValue => ++prevValue),

        incrementAt: (val) => () => setCounterValue(prevValue => prevValue + val),

        decrement: () => setCounterValue(prevValue => --prevValue),

        decrementAt: (val) => () => setCounterValue(prevValue => prevValue - val),

        reset: () => setCounterValue(value)
    };

    return [ counterValue, functionsCounter ];
};