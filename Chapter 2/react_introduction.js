/** Feature 1 */
/*
1. Write a fucntion component that takes no props
2. Call it Greeting, write it using ES6’s arrow function
3. Returns an h1 tag with the text “Hello World today!"
*/

const Greeting = name = John => `<h1> Hello World today ${name}! <h1>`;
Greeting('ayo')

/*
THINGS YOU MIGHT MISS OUT
a. The evaluation '=' between R.H.S and the L.H.S
b. declaring the fucntion name
c. The parenthesis () can be left of out. when you have one variable, other than that, it can't.
d. There is no need for a return statement unless it is more than one line
e. The brackets are also added in the case of d above

*/

/* Experiments */
/* Experiment 1 */
const Greeting = name = John = ayo = dapo => `<h1> Hello World today ${name}! <h1>`;
Greeting('ayo')

//Result is an evluation of R.H.S of name [John] and then assining that value to name

/* Experiment 2 */
const Greeting = patrick = ayo = dapo = mandem => patrick == ayo;

Greeting('ayo')

//Result is true because the above in experiment 2

/* Experiment 3 */
const Greeting = name = dapo => `<h1> Experimenting with arrow functions today? ${name} ${dapo}! <h1>`;
Greeting('ayo')

//Result in experiment 1 is the same as this because innitial argument is used in the evalution of the statement 
//and from then two evalutions, there can be one million evalutations still the same thing. 



/** Feature 2 */

import React from 'react';
import logo from './logo.svg';
import './App.css';


const Greeting = props => <h1 className="App">Hi {props.name}, I’m a smart component!</h1>

export default Greeting;


//Export this and use with the ReactDOM.render() function 


//so 


ReactDOM.render(<Greeting name="Ayo" /> , document.getElementById('root'))