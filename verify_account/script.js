'use strict';

const codes = document.querySelectorAll('.code');

codes.forEach(code => code.value = '');

codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        codes[index].value = '';
        if(e.key >= 0 && e.key <= 9){
            setTimeout(() => codes[index + 1].focus(), 10); 
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => codes[index - 1].focus(), 10); 
        }
    });
});