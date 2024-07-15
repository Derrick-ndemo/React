import ComponentC from "./ComponentC";
function ComponentB() {

    return (
        <div className="comp-box">
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB;