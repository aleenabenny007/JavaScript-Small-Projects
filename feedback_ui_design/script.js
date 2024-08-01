const ratings = document.querySelectorAll('.rating');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');

let selectedRating = 'Satisfied';

panel.addEventListener('click', function (e) {
    if(e.target.parentNode) {
        if (e.target.parentNode.classList.contains('rating')) {
            removeActive();
            e.target.parentNode.classList.add('active');
            if (e.target.nextElementSibling)
                selectedRating = e.target.nextElementSibling.innerHTML;
            else
                selectedRating = e.target.innerHTML;
        }
    }
    
    if (e.target.classList.contains('rating')) {
        removeActive();
        e.target.classList.add('active');
        selectedRating = e.target.children[1].innerHTML;
    }
});

sendBtn.addEventListener('click', function(e){
    panel.innerHTML = `
    <i class="fa-solid fa-heart"></i>
    <strong> Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>   
    `;
})

function removeActive() {  
    ratings.forEach(r => r.classList.remove('active'));
}




