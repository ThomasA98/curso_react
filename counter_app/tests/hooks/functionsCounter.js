import { useState } from 'react';

export const useCounter = ({ value }) => {

    const [counterValue, setCounterValue] = useState(value);

    const increment = () => setCounterValue(prevValue => ++prevValue);

    const decrement = () => setCounterValue(prevValue => --prevValue);

    const reset = () => setCounterValue(value);

    return [ counterValue, {increment, decrement, reset}];
};