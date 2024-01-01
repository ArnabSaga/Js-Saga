let myhero = ['Thor', 'Spiderman'];

let heroPower = {
    Thor : 'Hammer',
    Spiderman: 'Sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.power = function(){
    console.log(`power is present in all objects`);
}

Array.prototype.superPower = function(){
    // console.log(`Boom Boom!`);
}

myhero.superPower()
// heroPower.superPower() 'It didnt had the access to the "superPower" because its delcare in Array not in Object.'

// ______________________ inheritance (old way) ______________________
const user = {
    name: 'Arnab',
    gmail: 'fakegmail.com'
}

const Teacher = {
    makeLetcher: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: false,
    partTime: true,
    __proto__: TeacherSupport, //inheritance
}

Teacher.__proto__ = user

// ______________________ New way ______________________

// setPrototypeOf => Sets the prototype of a specified object o to object proto or null. Returns the object o.

Object.setPrototypeOf(TeacherSupport, Teacher)


// let myName = 'Arnab';
// console.log(myName.truelength);


// Question 1: Create a function that will determine the number of characters in a given word
let anotherUsername = 'Chagol       ';

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUsername.trueLength();
'   God Of War  '.trueLength();
'  Game I Want To play   '.trueLength()