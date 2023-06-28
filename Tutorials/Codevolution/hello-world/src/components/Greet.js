import React from 'react'

// function Greet() {
//     return <h1>Hello Harikrishnan</h1>
// }

// ES6 syntax arrow function
const Greet = (props) => <h1>Hello {props.name} aka {props.heroName}</h1>

export default Greet