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


//Create a log in log out html page in react
/** Feature 3 */
import React from 'react';
import logo from './logo.svg';
import './App.css';


class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loogedin: true };
        this.state = { username: '' };
    }

    login = () => this.setState({ loogedin: true, username: 'ayo' })
    logout = () => this.setState({ loogedin: false, username: '' })

    render() {
        return (
            <div>
                <button onClick={this.login}>Log In </button>;
      <button onClick={this.logout}>Log Out</button>;
      <h2>Welcome, you're {this.state.loogedin ? "Logged In" : "Logged out"} {this.state.username}</h2>
            </div>
        )
    }
}


export default Log;

//THINGS I MISSED OUT
//1. onClick is a prop on the <button/>
//2. the stateless functions in the class is initiated by this.nameofFunction
//3. this.setState recieves an object.
//4. That is when the component is restarted
//5. Start the component wth a stateless one. Simple arrow func and then a class component i.e https://www.w3schools.com/react/react_props.asp



/** Feature 4 */



