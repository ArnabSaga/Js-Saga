const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false
const loggedInFromFacebook = true

// and operator => both condition must be true, then it will work
if(userLoggedIn && debitCard){
    console.log('Allow to buy course');
}

// or operator => in both condition one must be true, then it will work
if (loggedInFromGoogle || loggedInFromFacebook) {
    console.log('Allow to buy the course');
}

// (ES6)Nullish Coalescing operator (??): null and undefined => This operator main Goal's if it found any null/undefined value then it will print the 2nd value(num, str)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 

console.log(val1 );

// Terninar Operator: condition ? ture : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log('less then 80') : console.log('more then 80');