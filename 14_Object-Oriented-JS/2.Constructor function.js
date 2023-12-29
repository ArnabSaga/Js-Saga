// const promiseOne = new Promise();
// const date = new Date();

/*
constructor function => It just allows us the creation of multiple instances from the same object literal. 

new => It will help us to create new 'execution context' and this we call 'constructor function'

How does constructor function work? 
=> Now look at the user funtion, in "parameter" there is a 'userName'.
And in the function's body there are declare 'userName = userName', now how we identify which 'userName' is "variable" & which 'userName' is "parameter". 
In line(15) we easy understand the 'this.userName' is "variable" & 'userName' is the "parameter"
*/

function user (userName, loginCount, isLoggedIn){
    // userName = userName
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`hello ${this.userName}`);
    }

    return this
}

// const userOne = user('Arnab', 5, true);
// const userTwo = user('Moury', 11, false);
/*
now what does 'userTwo' done!!!
I never called 'userTwo' but it over write 'userOne'. Now you thing what should i do then, Only use 'new' key word it will solve it
*/

const userOne = new user('Arnab', 5, true);
const userTwo = new user('Moury', 11, false);
console.log(userOne.constructor);
// console.log(userTwo);

/*
Now know about the 'new' key word -
step-1: When You use 'new' key word at 1st it create a "empty object". The "empty object" called 'instance' .
step-2: After then a 'constructor function' was call for the 'new' key word.
strp-3: In 'this' key all the argument were inject.
step-4: And in last step you will get all the argument in the function   


constructor => constructor is a anything but of a reference(function user)
*/
