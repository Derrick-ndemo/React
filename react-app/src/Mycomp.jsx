/* eslint-disable no-unused-vars */

// useState() = Re- renders the component when the state value changes
//useRef() = Does not cause re-renders when its value changes
//          1. Accessing/Interacting with DOM elements
//          2. Handling Focus, Animations, and Transitions
//          3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
    // useRef hook
    // let [number, setNumber] = useState(0)
    const inputref = useRef(null)
    useEffect(() => {
        console.log("Component Rendered")
    })
    function handleClick () {
        inputref.current.focus()
        inputref.current.style.backgroundColor = "cyan"
    }

    // useEffect hook
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green"); 
    useEffect(() => {
        document.title = `Count: ${count} ${color} ${width}`;
    }, [count, color, width]);
    
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        // cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    // end of useEffect
    const [name, setName] = useState("Geust");
    const [age, setAge] = useState(10);
    const [isEmployed, setIsEmployed] = useState(false);
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payement, setPayement] = useState();
    const [shipping, setShipping] = useState();
    // Objects and arrays
    const [cars, setCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState("");
    const [carMake, setCarMake] = useState("");

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana", "Mangoe"]);

    function handleShipping(e) {
        setShipping(e.target.value);
    }

    function handlePayement(e) {
        setPayement(e.target.value);
    }

    function handleCommentChange(e) {
        setComment(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }
    const updateName = () => {
        setName("Derrick");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const employ = () => {
        setIsEmployed(!isEmployed);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // function handleYearChange(e) {
    //     setCar(c => ({...c, year: e.target.value}))

    // }
    // function handleModelChange(e) {
    //     setCar(c => ({...c, model: e.target.value}))
    // }
    // function handleMakeChange(e) {
    //     setCar(c => ({...c, make: e.target.value}))
    // }

    function handleAddFood(e) {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        if (newFood.length > 0) {
            setFoods((f) => [...f, newFood]);
        }
    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel,
        };
        if (
            newCar.year.length > 3 &&
            newCar.make.length > 0 &&
            newCar.model.length > 0
        ) {
            setCar((c) => [...c, newCar]);
        }
        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake("");
    }
    function handleRemoveCar(index) {
        setCar(cars.filter((_, i) => i !== index));
    }
    function handleChangeYear(e) {
        setCarYear(e.target.value);
    }
    function handleMakeChange(e) {
        setCarMake(e.target.value);
    }
    function handleModelChange(e) {
        setCarModel(e.target.value);
    }

    // UseEffect
    function addCount() {
        setCount((c) => c + 1);
    }

    function changeColor() {
        setColor((c) => (c === "green" ? "red" : "green"));
    }
    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return (
        <div>
            <button onClick={handleClick}>
                Click Me !
            </button> <br />
            <input type="text" ref={inputref}/>
            <p onChange={handleResize} >window Width: {width} px</p>
            <p onChange={handleResize}>window Height: {height}px</p>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <br />
            <button onClick={changeColor}>Change Color</button>
            <h2>List Car Items</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>
            <input
                type="number"
                value={carYear}
                onChange={handleChangeYear}
                placeholder=""
            />{" "}
            <br />
            <input
                type="text"
                value={carMake}
                onChange={handleMakeChange}
                placeholder="Enter car make"
            />{" "}
            <br />
            <input
                type="text"
                value={carModel}
                onChange={handleModelChange}
                placeholder="Enter car model"
            />{" "}
            <br />
            <button onClick={handleAddCar}>Add Car</button>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name" />
            <button onClick={handleAddFood}>Add Food</button>
            {/* <p>Your Favorite car is: {car.year} {car.make} {car.model} </p>
            <input type="number" value={car.year} onChange={handleYearChange} /> <br />
            <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
            <input type="text" value={car.model} onChange={handleModelChange} /> <br /> */}
            <p>Name: {name} </p>
            <button onClick={updateName}>Set Name</button>
            <br />
            <hr />
            <p>Age: {age} </p>
            <button onClick={incrementAge}>Increment Age</button>
            <br />
            <hr />
            <p>
                {" "}
                {isEmployed
                    ? "You are an employee of this company!"
                    : "You are not a member"}{" "}
            </p>
            <button onClick={employ}>Employee status</button>
            <br />
            <br />
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
            />
            <p>Quantity: {quantity}</p>
            <textarea
                value={comment}
                placeholder="Enter delivery instructions"
                onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>
            <select value={payement} onChange={handlePayement} name="" id="">
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="M-pesa">M-pesa</option>
            </select>
            <p>Payement: {payement}</p>
            <label htmlFor="pickUp">
                <input
                    type="radio"
                    value="Pick up"
                    checked={shipping === "Pick up"}
                    onChange={handleShipping}
                />
                Pick Up
            </label>
            <label htmlFor="Delivery">
                <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShipping}
                />
                Delivery
            </label>
            <p>Shipping: {shipping} </p>
        </div>
    );
}

export default MyComponent;
