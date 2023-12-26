/*
A promise is an object representing thr eventual completion or failure of an asynchronous operation.

There are 3 State in Promise's => 
                                1. Pending
                                2.Resolved -> then
                                3.Reject -> catch
*/

const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, cryptography , network call
    setTimeout(() => {
        console.log('Async task is compelete')
        resolve() // connected by then
    }, 1000)
})

promiseOne.then(function () {
    console.log('promise consumed')
})

// with in 1 statement
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2')
        resolve()
    }, 2000)
}).then(() => {
    console.log('Async 2 resolved')
})

// data conjuction => passing the 'object' value to 'then'
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: 'Arnab', email: 'example@gmail.com' })
    }, 3000)
})

promiseThree.then((user) => {
    console.log(user)
})

// database connection
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: 'moury', password: '123' })
        } else {
            reject('!!!ERROR!!!')
        }
    }, 3000)
});
    // checking method
promiseFour
    .then((user) => {
        console.log(user)
        return user.username
    })
    .then((username) => { 
        console.log(username)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log('The promise is either resolved or reject')) //default

// new methods of calling 'promise'
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let error = true;
        if(!error){
            resolve({language: 'javascript', codeName: 'js'});
        }else{
            reject('ERROR: JS went wrong');
        }
    },3000)
});

// async await can't handle error without 'try-catch'
async function consumePromiseFive(){
    try{
        const response =  await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

/*  fetch method with async-await 
async function getAllUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('E: ',error);
    }
}
getAllUser()
*/ 

//fetch method with then-catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log('error'))