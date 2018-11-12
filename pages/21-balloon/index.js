const balloon = document.getElementById('balloon');


window.addEventListener("keydown", function(event) {
  // arrow key
  if ([37, 38, 39, 40].indexOf(event.keyCode) > -1) {
    //prevent default behavior of arrow keys
      event.preventDefault();

      if (event.keyCode === 38) {
        //up arrow => inflate
        inflate();
      } else if (event.keyCode === 40) {
        //down arrow => deflate
        deflate();
      }
  }
});

function inflate() {
    //gets current font size of balloon emoji
    let style = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);

    // if size > 100px, pop balloon
    if (currentSize + 10 > 250) {
      pop();
    }
    // else, increase size
    else {
      balloon.style.fontSize = (currentSize + 10) + 'px';
    }
}

function pop() {
  balloon.innerHTML = '💥';
}

function deflate() {
  //do nothing if already popped
  if (balloon.innerHTML === '💥') {
    return;
  }
  //gets current font size of balloon emoji
  let style = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
  let currentSize = parseFloat(style);
  //decrease size
  balloon.style.fontSize = (currentSize - 10) + 'px';
}
