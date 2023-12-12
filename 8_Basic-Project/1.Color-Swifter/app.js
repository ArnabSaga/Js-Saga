/*
const btn = document.querySelectorAll('.box');
const body = document.querySelector('body');

btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const color = e.target.style.backgroundColor;
        body.style.backgroundColor = color;
    });
});
*/

const btn = document.querySelectorAll('.box');
const body = document.querySelector('body');

btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'navy'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'crimson'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'violet'){
            body.style.backgroundColor = e.target.id
        }
    })
})
