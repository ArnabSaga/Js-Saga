/*
const coding = ['js', 'ruby', 'python', 'cpp', 'java', 'c'];

const value = coding.forEach( (items) => {
    // console.log(items);
    return items;
});         

console.log(value);
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myNums.filter((num) => num < 5)
// console.log(newNums);

// const newNums = myNums.filter((num) => (num < 5))

/* const newNums = myNums.filter((num) => {
    return num < 5
})

const newArr = [] 
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
/*
// for...of

for(let book of books){
    console.log(book.title);
}
*/


// fliter methods

let userBooks = books.filter( (bk) => bk.genre === 'History')

// console.log(userBooksHistoryGenre);
userBooks = books.filter( (bk) =>  bk.publish >= 1900 && bk.genre === 'Fiction')
console.log(userBooks);