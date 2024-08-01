'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////
////////////////////////////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const parallelogram = document.createElement('div');
parallelogram.classList.add('parallelogram');

// to attach it to the top of body
document.body.prepend(parallelogram);

// to get all the styles 
console.log(getComputedStyle(parallelogram));
// to get any specific style
console.log(getComputedStyle(parallelogram).width);

// to change any existing property value relative to the existing value
parallelogram.style.width = parseFloat(getComputedStyle(parallelogram).width) + 250 + 'px';

// to change the properties set in css as 'root :'
document.documentElement.style.setProperty('--color-primary', 'orange');

// to get attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(parallelogram.className);

// to set attributes
logo.setAttribute('by', 'Aleena Benny');
console.log(logo);


///////////////////////////////////////
//....Smooth scrolling....

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X,Y) : ', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth,
  );

  // Scrolling
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  // OR
  section1.scrollIntoView({ behavior: 'smooth' });   // easy, but not suitable for some browsers

});


///////////////////////////////////
// Events

//  has three phases
//   (i) Capturing phase
//  (ii) Target phase
// (iii) Bubbling phase

// parameters
//   (i) type of event
//  (ii) function
// (iii) use capture parameter : if true listens to capturing events ( by default false)
//              -- true :  capturing phase
//              -- false : bubbling phase

// Capturing phase --> event travels all the way down to the element from the root of DOM tree.
// Target phase --> event actually executed in the element      
// Bubbling phase --> event bubbles up from the element to the root of the DOM tree

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// on clicking the child here the event listener of parent is also invoked. (Due to Bubbling)
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(); 
//   console.log('FEATURE : ', e.target, e.currentTarget);
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV LINKS : ', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV : ', e.target, e.currentTarget);
// }, true);


////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach((el, i) => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior : 'smooth'})
//   });
// }); 
// as the number of links increases it affects the performance as the same event is copied and used for all the links, if we use this way
// therefore try this instead

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log("target :", e.target);
  e.preventDefault();
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});
// here the event is set to only the parent element.

//////////////////////////////////////////////////
// Operations Content -- WEBSITE

// Tabbed component 
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target.parentElement;  //it will not work as we expected
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if(!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Active content area
  console.log(clicked);
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  const content = document.querySelector(`.operations__content--${clicked.dataset.tab}`) // As data-tab="2" in html
  .classList.add('operations__content--active');
});


//////////////////////////////////////////////



///////////////////////////////////////////////
// DOM Traversing

// const h1 = document.querySelector('h1');

// // Going downwards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = "orangered";

// //Going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'green';
// h1.closest('h1').style.background = 'grey';

// // Going sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });


///////////////////////////////////////////////
// Sticky navigation

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function(){
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top)
//     nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

///////////////////////////////////////////////
// Sticky navigation : Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root : null, 
//   threshold : [0, 0, 2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);


///////////////////////////////////////////////
// Lifecycle DOM Events

// document.addEventListener('DOMContentLoaded', function(e) {
//   console.log('HTML parsed and DOM tree built!',e);
// });

// window.addEventListener('load', function(e) {
//   console.log('Page fully loaded', e);         
// });

// window.addEventListener('beforeunload', function(e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });   fgdggdf


       