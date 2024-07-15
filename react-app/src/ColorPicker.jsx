/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ColourPicker() {
    const [color, setColor] = useState("#00f5f1");

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColourPicker;
