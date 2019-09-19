/* Feature 1 */
        const east = ["Uganda", "Kenya", "Tanzania"]; 

        //code
        console.log(...east);

//Expected Result:  "Uganda", "Kenya", "Tanzania"

/* Feature 2 */
        const west = ["Nigeria", "Cameroon", "Ghana"];

        //code
        console.log(...west);

//Expected Result:  "Nigeria", "Cameroon", "Ghana"


/** Feature 3 */

        const student = {
            name: 'John Kagga', city: 'Kampala'
        };

        //old code 1
        console.log('Hello ' + student.name + ' from ' + student.city);
        //new code 2
        console.log(`Hello ${student.name} from ${student.city}`);

//Expected Result: Hello John Kagga from Kampala

/** Feature 4 */

        function greet( name = 'Fellow' , greeting = 'Welcome') {
            return (`${greeting} ${name}`);
        }
        //code
        console.log(greet());
        console.log(greet('Kagga'));
        console.log(greet('Mike', 'Hi'));


//Expected Result:
/* Welcome Fellow
  Welcome Kagga
  Hi Mike
 */ 


 /*Feature 5 */
const points = [20, 30, 40];

 //old code 1

let x  = points[0];
let y  = points[1];
let z  = points[2];
console.log(x, y, z);

 //new code 2
let [a, b, c] = points;
console.log(a, b, c);

 // Expected result: 20 30 40