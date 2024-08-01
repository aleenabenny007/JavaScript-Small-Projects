'use strict';


const sliderImages = document.querySelectorAll('.slide-in');

function toggleDisplaySlide() {
    // console.log('scroll', window.scrollY);
    // console.log('height', window.innerHeight);
    // console.log(window.scrollY + window.innerHeight + (1637 / 2));
    sliderImages.forEach(sliderImg => {
        const showcondition = (window.scrollY + window.innerHeight - sliderImg.height / 2) > (sliderImg.offsetTop);
        const hideCondition = window.scrollY > (sliderImg.offsetTop + sliderImg.height / 2);

        if (showcondition && !hideCondition) {
            setTimeout(sliderImg.classList.add('active'), 20);
        }
        else
            setTimeout(sliderImg.classList.remove('active'), 20);
    })
}

window.addEventListener('scroll', toggleDisplaySlide);



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////



// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {  
//       var context = this, args = arguments;
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;   
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   };

//   const sliderImages = document.querySelectorAll('.slide-in');

//   function checkSlide() {
//     sliderImages.forEach(sliderImage => {
//       // half way through the image
//       const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//       // bottom of the image
//       const imageBottom = sliderImage.offsetTop + sliderImage.height;
//       const isHalfShown = slideInAt > sliderImage.offsetTop;
//       const isNotScrolledPast = window.scrollY < imageBottom;
//       if (isHalfShown && isNotScrolledPast) {
//         sliderImage.classList.add('active');
//       } else {
//         sliderImage.classList.remove('active');
//       }
//     });
//   }

//   window.addEventListener('scroll', debounce(checkSlide));    

