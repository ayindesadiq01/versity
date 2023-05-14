'use strict'

const menu = document.querySelector('.menu');
const user = document.querySelector('.user');
const side = document.querySelector('.ani-side')
const arrow = document.querySelector('.arrow');

const navLinks = document.querySelector('.nav-links')
const visit = document.querySelector('.vist');
const camp = document.querySelector('.campus');
const blurr = document.querySelector('.burry');

user.addEventListener('click', function(){
 side.classList.remove('hidden');
 blurr.classList.remove('hidden');
});

arrow.addEventListener ('click', function(){
 side.classList.toggle('hidden');
 blurr.classList.toggle('hidden');
});

blurr.addEventListener('click', function(){
 side.classList.add('hidden');
 blurr.classList.add('hidden');
})

// Scroll for Visit
visit.addEventListener('click', function(e){
 e.preventDefault();
 camp.scrollIntoView({behavior: 'smooth'})
})


// navLinks.addEventListener('click', function(e){
//  e.preventDefault();
//  console.log(e.target)
//  if(e.target.classList.contains('nav-link')){
//   const x = e.target.getAttribute('href')
//   document.querySelector(x).scrollIntoView({behavior: 'smooth'})
//  } 
// })

//USING THE OLD METHOD
document.querySelectorAll('.nav-link').forEach(function(x){
 x.addEventListener('click', function(e){
  e.preventDefault();
  const mov = x.getAttribute('href')
  document.querySelector(mov).scrollIntoView({behavior: 'smooth'})
 })

 document.addEventListener('keydown', function(e) {
    // console.log(e);
    if (e.key === 'Escape') {
      if (!side.classList.contains('hidden')) {
        side.classList.add('hidden');
        blurr.classList.add('hidden');
      }
    }
  })
}

)