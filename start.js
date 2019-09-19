/* Situation 1 */
const east = ["Uganda", "Kenya", "Tanzania"]; 

//code
console.log(...east);

//Expected Result:  "Uganda", "Kenya", "Tanzania"

/* Situation 2 */
const west = ["Nigeria", "Cameroon", "Ghana"];

//code
console.log(...west);

//Expected Result:  "Nigeria", "Cameroon", "Ghana"


/** Situation 3 */

const student = {
    name: 'John Kagga', city: 'Kampala'
};

//code 1
console.log('Hello ' + student.name + ' from ' + student.city);
//code 2
console.log(`Hello ${student.name} from ${student.city}`);

//Expected Result: Hello John Kagga from Kampala