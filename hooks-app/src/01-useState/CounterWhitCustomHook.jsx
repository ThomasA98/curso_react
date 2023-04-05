import { useCounter } from "../hooks/useCounter";

export const CounterWhitCustomHook = () => {

    const { counter, decrement, increment, reset } = useCounter(0);

    return (
        <div>
            <h1>Counter whit hook: { counter }</h1>
            <hr />

            <button className="btn btn-primary" onClick={ increment }>+1</button>
            <button className="btn btn-primary" onClick={ reset }>reset</button>
            <button className="btn btn-primary" onClick={ decrement }>-1</button>
        </div>
    );
};