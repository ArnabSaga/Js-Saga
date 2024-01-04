/*
function inside() {
    let name = 'Arnab' ;

    function dispaly(){
        console.log(name);
    }
    dispaly();
}
inside();
*/

// Note => We know that every function has a scope, outside of the scope if we declare anything that will not work
function outter(){
    let username = 'Arnab';
    // console.log('otter', secret); 'inner child dont want to see the value of secret'
    function inner(){
        let secret = 'my123'
        console.log('inner',username);
    }
    function innerTwo(){
        console.log('inner Two',username);
        // console.log(secret); 'inner brother won't give to u to permission to see' 
    }
    inner();
    innerTwo()
}
outter();
// console.log('Too Outter',username);

// 1. In simple terms, lexical scope means that the value of an outer function can only be accessed within an inner function that is called lexical scope.

// 2. Now, one thing is that a 'parent function' will share its value with the 'child function', but 'child functions' will not share their values with each other.

// 3. One thing more the 'parent function' won't access the 'child functions' value.
