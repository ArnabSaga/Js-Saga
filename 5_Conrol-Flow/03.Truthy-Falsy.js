// falsy value => "", 0 , -0, fasle, NaN, BigIn 0n, null, undefined

// truth value => all the other value, '0', [], 'false', ' ', {}, function(){} 

const userEmail ='adidey@244@gmail.com';
const password = [];
const userLoggedIn = {};

if (userEmail) {
    console.log('Got user Email');
}else{
    console.log(`Don't have user email`);
}

// checking array
if (password.length === 0) {
    console.log('array is empty');
}

// checking object
if (Object.keys().length === 0) {
    console.log('Object is empty');
}

// InterView Questions
console.log(false = 0); //true
console.log(false = ''); //true
console.log(0 = ''); //true


