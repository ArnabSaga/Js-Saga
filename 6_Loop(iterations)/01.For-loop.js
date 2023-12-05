/*
for(let i = 0; i <= 20; i++) {
    console.log('DO work r8 now');
}
for (let i = 0; i < 3; i++) {
    console.log('---Tang---');
    for(let j = 0 ; j < 4; j++){
        console.log('ting');
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for(let j = 0 ; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
};

*/

let myArray = ['Flash', 'Spiderman', 'Batman', 'Superman'];

// basic way to run array
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
};

// Advance way to run array
for(let myArrays of myArray) {
    // console.log(myArray);
    console.log(myArrays);
};

// Advance way to run array's index
for(let myArrays in myArray) {
    // console.log(myArray);
    console.log(myArrays);
};

//break and continue

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log(`Deteced 5`);
        break;
    }
    console.log(`value of i ${i}`);
    
}

// continue
for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log(`Deteced 5`);
        continue;
    }
    console.log(`value of i ${i}`);
}