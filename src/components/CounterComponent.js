import React from 'react';
import { connect } from 'react-redux';

const CounterComponent = ({ count, increment, decrement }) => {
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={increment}></button>
            <button onClick={decrement}></button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    count: state.count,
});
const mapDispacthToProps = (dispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
})

export default connect(mapStateToProps, mapDispacthToProps)(CounterComponent);
