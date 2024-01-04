function makeFunc(){
    const name = 'Rahat';
    function dispalyName(){
        console.log(name);
    }
    return dispalyName;
}

const myFunc = makeFunc();
myFunc()

/*
1. Here, 'makeFunc' has a scope, but when I return 'displayName,' at that time, the scope of 'makeFunc' ends.
2. If the function scope has ended, how do you think it will still work in 'lexical scope'?
3. If you recall the 'function execution context,' when it ends, all the data is moved to the 'memory' location, and when the data is called, it will execute.
4. So, in the 'myFunc' variable, when I call 'makeFunc()', it not only passes 'displayName()' but also retains a reference to the outer function (makeFunc).
5.In simple terms, the total references of 'lexical scope' are passed to the 'myFunc' variable. 
*/