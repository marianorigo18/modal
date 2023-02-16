import {categories} from './exports/data.js';

const containerBtns = document.querySelector('.container-btns');
const modalContainer = document.querySelector('.modal-container');

containerBtns.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-modal')){
        modalContainer.classList.add('open-modal')
    }
})

modalContainer.addEventListener('click', (e)=> {
    if(e.target.classList.contains('btn-close')){
        modalContainer.classList.remove('open-modal')
    }
})