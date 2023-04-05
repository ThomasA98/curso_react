import PropTypes from 'prop-types';
import { useCounter } from '../hooks/functionsCounter';

export const CounterApp =  ({ value })  => {

    const [counterValue, {increment, decrement, reset}] = useCounter({ value });

    return (
        <div>
            <h1>Counter App</h1>
            <h2 data-testid="test-counter-value">{ counterValue }</h2>
            <button onClick={ increment } >increment</button>
            <button onClick={ decrement } >decrement</button>
            <button  aria-label='btn-reset' onClick={ reset } >reset</button>
        </div>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: 0,
};