function setUsername(username) {
    // complex database call's
    this.username = username
    console.log('called');
}

// call method => Calls a method of an object, substituting another object for the current object.

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email;
    this.password = password
}

const bot = new createUser('musicBot', 'spotify@.com', 'unknow123')
console.log(bot);