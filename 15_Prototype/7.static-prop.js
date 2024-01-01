class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `${Math.floor(Math.random() * 10) + 1 } `
    }
}

const arnab = new user('Arnab');
// console.log(arnab.createId());

class user2 extends user {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const musu = new user2('Musu', 'susu@gmail.com')
musu.logMe()
console.log(musu.createId());