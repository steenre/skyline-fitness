// let elem = document.querySelector('body');
let loadScreen = document.querySelector('.loadScreen')

window.addEventListener("load", ()=>{
    loadScreen.style.display = 'none';
})

let nav = document.querySelector('nav')
let navBtn = document.querySelector('.nav-btn')
let no = document.querySelector('.nav-overlay')

navBtn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    no.classList.toggle('active')
})