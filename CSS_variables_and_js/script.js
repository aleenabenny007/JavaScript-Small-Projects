'use strict';

const inputs = document.querySelectorAll('input');

function updateUI() {
    inputs.forEach(input => {
        document.documentElement.style.setProperty(`--${input.name}`, `${input.value}${(input.dataset.unit) ? (input.dataset.unit) : ''}`);
    })
}

inputs.forEach(input => {
    input.addEventListener('change', updateUI);
});