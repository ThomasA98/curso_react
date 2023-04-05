import PropTypes from 'prop-types';
import { useCounter } from '../hooks/useCounter';
import styled from 'styled-components';

export const CounterApp =  ({ value })  => {

    const [
        counterValue,
        {
            increment,
            incrementAt ,
            decrement,
            decrementAt,
            reset
        }
    ] = useCounter(value);

    return (
        <CounterAppStyles>
            <h1 className='counter-title'>Counter App</h1>
            <h2 className='counter-number'>{ counterValue }</h2>
            <div className="counter-buttons">
                <button className='counter-btn' type="button" onClick={ increment } >increment</button>
                <button className='counter-btn' type="button" onClick={ decrement } >decrement</button>
                <button className='counter-btn' type="button" onClick={ incrementAt(2) } >increment 2</button>
                <button className='counter-btn' type="button" onClick={ decrementAt(2) } >decrement 2</button>
                <button className='counter-btn' type="button" onClick={ reset } >reset</button>
            </div>
        </CounterAppStyles>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: 0,
};

const CounterAppStyles = styled.section`

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    & > .counter-title {
        font-size: 60px;
        color: #484;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 15px;
    }

    & .counter-number {
        text-align: center;
        font-size: 50px;
    }

    & .counter-btn {
        display: block;
        width: 200px;
        height: 40px;
        font-size: 20px;
        margin: 5px 0;
        color: white;
        background-color: #484;
        border: none;
        border-radius: 10px;
    }

    & .counter-buttons {
        margin: 0 auto;
    }

`;