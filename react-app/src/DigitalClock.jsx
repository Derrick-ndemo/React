/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(IntervalId);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const maridium = hours >= 12 ? 'PM' : 'AM'

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${maridium}`
    }

    function addZero (number) {
        return (number < 10 ? '0' : '') + number
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;
