const myGame = {
    'Game1': 'NFS',
    'Game2': 'Spider-Man'
}

for (const key in myGame) {
    console.log(`${key} u can play ${myGame[key]}`);
}

const programmingLanguage = {
    'js': 'Javascript',
    'cpp': 'C++',
    'rb': 'Ruby',
    'swift': 'Swift of Apple'
}

for (const key in programmingLanguage) {
    console.log(`${key} shortcut is for ${programmingLanguage[key]}`);
}

const greeting = ['hello', 'hey', 'hi'];
for (const greet in greeting) {
    console.log(greet);
}
for (const key in greeting) {
    console.log(greeting[key]);
}