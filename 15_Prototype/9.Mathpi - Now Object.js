// INTERVEIW
// We Know in js there is a value of PI exist, That was '3.141592653589793'. Can you convert it into 4 that PI's value? (object related)

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descripter);

/*
1. Here I can see the PI's value is given
2. 'Writable' value is 'false' that I can't be changed because the 'JS' developer design the structuure in c++ and they add some check that can't overwrite.
3. Same goes for 'enumerable' & 'configurable'
*/


const webDevelopement = {
    course: 'MRNE Stack',
    price: 200,
    isAvailable: true,

    orderTheCourse: function(){
        console.log(`You course haven't deliver`);
    }
} 

console.log(Object.getOwnPropertyDescriptor(webDevelopement, 'course'));

Object.defineProperty(webDevelopement, 'course', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(webDevelopement, 'course'));

for(let [key, value] of Object.entries(webDevelopement)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}