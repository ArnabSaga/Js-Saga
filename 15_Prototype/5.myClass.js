class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username} changol `
    }
    changeUsername2(){
        return `${this.username.toUpperCase()}`
    }
}

const jon = new User('Jon', 'JonSnow@yahoo.com', '123')
console.log(jon.encryptPassword());
console.log(jon.changeUsername2());

// Behind the scene
/*
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const JonSnow = new User('JonSnow', 'JonSnow2.0@yahoo.com', '123')
console.log(JonSnow.encryptPassword());
console.log(JonSnow.changeUsername());
*/
