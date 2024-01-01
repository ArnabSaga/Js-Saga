function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// A function is a function & a Function is an object too


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const rahat = new createUser('rahat', 25);
const azmain = new createUser('azmain', 250);

rahat.printMe()

/*
------------ InterView Question------------- 
1. We already know that function can be use as an 'object'.
2. So I can declare new method using 'prototype'.
3. So I have to write the function name, prototype & and the new method and declare the method functionality.
" createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
} "
4. Now, if you run the code now ' rahat.printMe()' it will through and error message "Cannot read properties of undefined (reading 'printMe')"
5. That's why you have to use the 'new' key word
*/

/* ______________________ 'new' functionality _____________________

Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/