import ColourPicker from "./ColorPicker";
import Card from "./Card";
import Button from "./Button";
import Student from "./Students";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePicture from "./profilePicture";
import MyComponent from "./Mycomp";
import Counter from "./Counter";
import ToDoList from "./ToDoList";
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";

function App() {
    const fruits = [
        { id: 1, name: "apple", cal: 95 },
        { id: 2, name: "orange", cal: 45 },
        { id: 3, name: "banana", cal: 38 },
        { id: 4, name: "mangoes", cal: 98 },
        { id: 5, name: "Grapes", cal: 76 },
        { id: 6, name: "Walnut", cal: 23 },
    ];

    const vegetables = [
        { id: 6, name: "Carrots", cal: 195 },
        { id: 7, name: "Kales", cal: 35 },
        { id: 8, name: "Corn", cal: 25 },
        { id: 9, name: "Broccoli", cal: 11 },
        { id: 10, name: "Cabbage", cal: 18 },
        { id: 11, name: "Ginger", cal: 12 },
    ];

    return (
        <>
            {/* card Component */}
            <Card />
            <Card />
            <Card />
            <Card />
            {/* usecontext hoo */}
            <ComponentA />
            {/* Digital Clock */}
            <DigitalClock />
            {/* TO Do List Component */}
            <ToDoList />
            {/* Color Picker Component */}
            <ColourPicker />
            {/* Student Component */}
            <Student name="Sponegebob" age={13} isStudent={true} />
            <Student name="Squidward" age={43} isStudent={false} />
            <Student name="Patrick" age={24} isStudent={true} />
            <Student name="Sandy" age={26} isStudent={true} />
            <Student />
            {/* Button Component */}
            <Button />
            {/* Greet component */}
            <UserGreeting isLoggedIn={true} username="Lilmeeee" />
            <UserGreeting  />
            {/* fruit list components */}
            {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
            {vegetables.length} && <List items={vegetables} category="Vegetables" />
            {/* pp component */}
            <ProfilePicture />
            {/* Mixture of different react func */}
            <MyComponent />
            <br />
            {/* Counter App Component */}
            <Counter />
        </>
    );
}

export default App;
