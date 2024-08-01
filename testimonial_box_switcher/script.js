'use strict';

const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');        
      
const testimonials = [        
    {
        name: 'Miyah Myles',
        position: 'Developer',
        photo: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=260&dpr=1',
        text: `Promoting you to lead graphic designer was the best choice for our company. I am glad to see you are challenging yourself and are open to more responsibilities. Management knew your strong attention to detail would make you the right candidate for this role.`
    },
    {
        name: 'Leon Daniel',
        position: 'CEO',
        photo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: `I am pleased with your determination to finish this project. Your helpful attitude shows you are ready to take on new challenges and grow with the company.`
    },
    {
        name: 'Liyana Davis',
        position: 'Marketting Head',
        photo: 'https://images.pexels.com/photos/4467683/pexels-photo-4467683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: `Your work looks great! It is clear that you care about your work, and I appreciate that you asked the client about their design preferences before creating their website.`
    },
    {
        name: 'Michael Fernandes',
        position: 'HR Manager',
        photo: 'https://images.pexels.com/photos/4100670/pexels-photo-4100670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: `All the training you have done with he has been very helpful. I have noticed your leadership skills and plan to keep you in mind for future projects`
    },
];


let idx = 0;

setInterval( updateTestimonial, 10000);
    
function updateTestimonial() {
   const {name, position, photo, text } = testimonials[idx];

   testimonial.innerHTML = text;  
   userImage.src = photo;
   username.innerHTML = name;
   role.innerText = position;   

   idx++;        

   if(idx >= testimonials.length) idx = 0; 
}       
updateTestimonial();