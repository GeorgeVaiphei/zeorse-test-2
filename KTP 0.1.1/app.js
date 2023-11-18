let bars = document.querySelector('.fa-bars');
let xmark = document.querySelector('.fa-circle-xmark');
let nav = document.querySelector('.nav--items');
bars.addEventListener('click', ()=> {
    nav.classList.add('nav--items-show')
})
xmark.addEventListener('click', ()=> {
    nav.classList.remove('nav--items-show')
})