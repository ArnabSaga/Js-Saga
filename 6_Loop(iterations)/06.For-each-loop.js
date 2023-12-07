const coding = ['js', 'ruby', 'python', 'cpp', 'java', 'c'];

coding.forEach( (items) => {
    console.log(items);
    
});

coding.forEach( (items, index, arr) => {
    console.log(items, index, arr);
});

// An Array inside an Object

const personOfLogged = [
    {
        name: 'Arnab',
        age: 23
    },
    {
        name: 'moury',
        age:20
    },
    {
        name: 'rahat',
        age: 24
    }
]

personOfLogged.forEach((persons) => {
    console.log(persons.name);
    console.log(persons.age);
})


// Another of way doing
/*
const food = ['Burger', 'Pasta', 'Pizza', 'Hot-Dog', 'Biriyani', 'Momo']
function printMe (event) {
    console.log(event);
}
food.forEach(printMe)
*/