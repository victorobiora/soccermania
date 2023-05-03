// select the circle element
const circle = document.querySelector('.circle');

// define a variable to store the border width
let borderWidth = 10;

// define a function to reduce the border width
function reduceBorder() {
  // reduce the border width by 1
  borderWidth--;

  // set the new border width
  circle.style.borderWidth = `${borderWidth}px`;

  // check if the border width has reached 0
  if (borderWidth === 0) {
    // if it has, clear the timeout and exit the function
    clearTimeout(timer);
    return;
  }

  // call the function again after 1 second
  const timer = setTimeout(reduceBorder, 1000);
}

// call the function to start the animation
reduceBorder();
0