'use strict'

const menu = document.querySelector('.menu');
const user = document.querySelector('.user');
const side = document.querySelector('.ani-side')
const arrow = document.querySelector('.arrow');

user.addEventListener('click', function(){
 side.classList.remove('hidden');
});
arrow.addEventListener ('click', function(){
 side.classList.add('hidden');
})

