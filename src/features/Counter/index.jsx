import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { descrease, increase } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const handleIncreaseClick = () => {
        const action = increase(); //action creator
        dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = descrease();
        dispatch(action);
    }

    return (
        <div>
            Counter Feature {counter}

            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;