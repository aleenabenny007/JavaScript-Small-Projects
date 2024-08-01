'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    // console.log(this);
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,  // ES6 feature
        done : false, 
    }
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
    this.reset();          
}

function populateList(plates = [], platesList) {   
    // console.log(platesList, plates);
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>        
            <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');                      
}

function toggleDone(e) {  
    // skip this unless its an input
    if(!e.target.matches('input')) return;
    
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);      
}

addItems.addEventListener('submit', addItem); 
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
      
    
