'use strict';

const addBtn = document.getElementById('add');   

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', function(){
    addNewNote();
});

function addNewNote(text = ''){
    const note = document.createElement('div');
    note.classList.add('note'); updateLocalStorage();
    note.innerHTML = `
    <div class="tools">
            <button class="edit">
                <img src="https://img.icons8.com/?size=24&id=xkouXgV4Wzo9&format=png&color=ffffff" alt="">
            </button>
            <button class="delete">
                <img src="https://img.icons8.com/?size=24&id=9deX0HJ5iAFS&format=png&color=ffffff" alt="">
            </button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea name="textarea" class="${text ? 'hidden' : ''}"></textarea>
    `;  

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');      
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text);  

    deleteBtn.addEventListener('click', function() {
        note.remove();
        updateLocalStorage();
    });

    editBtn.addEventListener('click', function(){
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        updateLocalStorage();     
    });

    textArea.addEventListener('input', (e) => {
        const {value} = e.target;
        main.innerHTML = marked(value);
    });

    document.body.appendChild(note);   
    updateLocalStorage();
}

function updateLocalStorage(){
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem('notes', JSON.stringify(notes));

    console.log(localStorage.getItem('notes'));

}

