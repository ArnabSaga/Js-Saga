//Doing Reduce method we have to give an 'initialValue'

// in Reduce we have pass 2 callback: 1)'accumulator' (empty value) & 2) 'currentValue' (working with the lastest value)

/*
const arr = [1, 2, 3, 4, 5];

const initialValue = 0;
const sum = arr.reduce(
    (accumulator + currentValue) => accumulator + currentValue
    initialValue
);

console.log(sum)
*/

/*
Note => 1st a accumulator ar value 0 thakbe and current value 1 thakabe, tar por 2 tar sum hobe. Sum hoya por accmulator er value hoye jabe oi 'sum' er value ta, aivabe ekhn ai notu sum er value update hobe tokhn ai next accmulator er value o same vabe update hobe.

*/

const myNum = [1, 2, 3];

const myTotal = myNum.reduce( (acc, currval) => {
    console.log(`acc: ${acc}, currval${currval} `);
    return acc + currval
}, 1)

console.log(myTotal);


const shoppingCard = [ 
    {
        itemName: 'Js Course',
        price: 2550
    },
    {
        itemName: 'Python Course',
        price: 1550
    },
    {
        itemName: 'Cpp Course',
        price: 550
    },
    {
        itemName: 'Ruby Course',
        price: 4550
    }
]

const totalPrice = shoppingCard.reduce( (acc, item) => {
    return parseInt(acc + item.price)
}, 0)

console.log(`Total Price of Course: ${totalPrice}`);