// let elem = document.querySelector('body');
let loadScreen = document.querySelector('.loadScreen')

window.addEventListener("load", ()=>{
    loadScreen.style.display = 'none';
})

let nav = document.querySelector('nav')
let navBtn = document.querySelector('.nav-btn')

navBtn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})