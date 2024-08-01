
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';

//shape used to join two line segments        
ctx.lineJoin = 'round';

// shape used at the end of each line
ctx.lineCap = 'round';  
         
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) hue = 0;

    if (direction)
        ctx.lineWidth++;
    else ctx.lineWidth--;

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 10)
        direction = !direction;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);  // if we release mouse button
canvas.addEventListener('mouseout', () => isDrawing = false); // if it goes out of the canvas
