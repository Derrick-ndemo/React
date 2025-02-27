/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <p className="count-display">
                {count}
            </p>
            <button className="counter-btn" onClick={decrement}>
                    Decrement
            </button>
            <button className="counter-btn" onClick={reset}>
                    Reset
            </button>
            <button className="counter-btn" onClick={increment}>
                    Increment
            </button>
        </div>
    )
}
