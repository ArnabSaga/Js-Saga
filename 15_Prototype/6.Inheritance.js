class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User Name is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new Couser was added by ${this.username}`);
    }
}

const teacher = new Teacher('Arnab', 'Arnab@BMw.com', '123');
teacher.logMe();
teacher.addCourse();

const teacher2 = new User('Robin')
teacher2.logMe();

console.log(teacher2 instanceof User);
console.log(teacher instanceof Teacher);