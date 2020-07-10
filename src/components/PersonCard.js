import React, { useState, Component } from 'react';

const PersonCard = ({
    firstName,
    lastName,
    age,
    hairColor
}) => {

    const [currentAge, setCurrentAge] = useState(age);

    function handleClick() {
        setCurrentAge(currentAge + 1);
    }

    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Increment Age!?</button>
            <br></br>
        </div>
    );
}

export default PersonCard;