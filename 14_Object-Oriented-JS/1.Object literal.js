const user = {
    username: 'Arnab',
    logInCount: 6,
    signedIn: true,

    getUserDetails: function() {
        // console.log('Got user details form database');
        // console.log(`Username: ${this.username}`);
        console.log(this); // 'user' object 
    }
}
const user2 = {
    username: 'Moury',
    logInCount: 15,
    signedIn: true,

    getUserDetails: function() {
        // console.log('Got user details form database');
        // console.log(`Username: ${this.username}`);
        console.log(this); // 'user' object 
    }
}

console.log(user.username);
user.getUserDetails()
console.log(this); // global object / window object 


/*
Now know about the 'this' key word -
1. When You use 'this' key word, it will create a "empty parenthese {}". The "empty parenthese" called 'new object'
*/