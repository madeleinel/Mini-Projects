// Set const "canvas" to be the canvas div with id "draw"
const canvas = document.querySelector("#draw");

// Set context to be 2d (?), getting the data from the "canvas" variable
const ctx = canvas.getContext("2d");

// Set the canvas to span the entire window
canvas.width = (window.innerWidth * 0.98);
canvas.height = (window.innerHeight * 0.8);

// Set the default colour of the brushstrokes
// ctx.strokeStyle = "tomato";

// Set the default style of brushstoke joints
ctx.lineJoin = "round";

// Set the default style of brushstoke ends
ctx.lineCap = "round";

// Set the width of the brush strokes
ctx.lineWidth = 10;

// Set the colour to combine with existing colour when doubling over previous brush strokes
ctx.globalCompositeOperation = 'source-over';
// console.log(ctx.globalCompositeOperation);

// Set
//// Set variables as 'let', as the values of these variables will change when moving the mouse/painting on the canvas

let isDrawing = false;  // Set default state to be not-drawing (ie when not pressing down the mouse)
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let newColor = "tomato";
let newWidth = 100;
// let newEffect = "source-over";

const colorChange = document.getElementById('colorSelector');
const widthChange = document.getElementById('widthSelector');

// Listening for 'change' within the constant 'colorChange'
// When that happens >> update the newColor variable
colorChange.addEventListener('change', (e) => {
  newColor = e.srcElement.value;
});

widthChange.addEventListener('change', (e) => {
  newWidth = e.srcElement.value;
});

const effectChange = document.getElementsByClassName('effectValue');
const effectList = document.querySelector('.effectList');
console.log(effectChange);

// var changeEffect = function () {
  for (const value of effectChange) {
    if (value.checked === true) {
      effectList.addEventListener('checked', (e) => {
        ctx.globalCompositeOperation = value.value; // value.value == the name of the chosen effect
        console.log(ctx.globalCompositeOperation);
      });
    }
  }
// }

// try adding an event to each element & listen to them, then link them to that function

function draw(e) {
  if(!isDrawing) return;  // if currently not-drawing, stop the function from running

  // console.log(e);

  ctx.strokeStyle = newColor;
  // `hsl(${hue}, 100%, 50%)`
  ctx.lineWidth = newWidth;

  // Set where the brush stroke should start from
  ctx.beginPath();
  // Set where the brush stroke should go to
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  // lastX = e.offsetX;
  // lastY = e.offsetY;
  // is equivalent to:
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if(hue >= 360) {
    hue = 0;
  }
}

// Add event listeners to tell the [program] when drawing is happening and not

canvas.addEventListener('mousedown', (e) => { // when mouse-down >> means it's drawing on the canvas
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);  // when mouse-up >> means no longer drawing on the canvas
canvas.addEventListener('mouseout', () => isDrawing = false); // // when mouse is outside of the canvas >> means no longer drawing on the canvas
