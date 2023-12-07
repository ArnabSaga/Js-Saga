// Map =>The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const myNum = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]

// const newNum = myNum.map( (num) => num + 10);
// console.log(newNum);

// chaining method => ai method a onk gulo method ek sathe bulid hoi 
const newNum = myNum
                .map((num) => num * 10)
                // This 2nd map will work on 1st map's given value 
                .map((num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNum);

const map = new Map()
map.set('BD', 'Bangladesh');
map.set('BD', 'Bangladesh');
map.set('IN', 'India');
map.set('USA', 'United Stand of America');
map.set('FR', 'France');

// console.log(map);

for (const [key] of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// it will not run because it's not an iterated
for (const key in map) {
    console.log(key);
}

