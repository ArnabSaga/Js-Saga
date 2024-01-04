// class based getter &setter (common)
class user {
    constructor (email, password){
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value
    }

    get password(){ //getting value outside of the class
        return `${this._password}Luffy`
    }

    set password(value){ // setting value inside in the class
        this._password = value
    }
}

const arnab = new user('a@arnab.ai', 'abc');
console.log(arnab.email);
console.log(arnab.password);