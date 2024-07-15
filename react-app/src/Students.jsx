/* eslint-disable react/prop-types */
import propTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes": "No"} </p>
        </div>
    );
}

// Proptypes are useful for debugging
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}

// Default props ====> used if no value is provided for a property
Student.defaultProps = {
    name: "Guest",
    age: "1",
    isStudent: false,
}


export default Student;
