// Your code here
const table = document.getElementById('board');

function makeRow(){
  //making TRs (rows)
  const newTr = document.createElement('tr');
  table.appendChild(newTr);
  console.log(table.appendChild(newTr));
  //making TDs (data/cells)

  for (let i = 0; i < 20; i++){
    //newTd doesn't work outside the loop bc objects are pass by reference not value - it would add the same object 20 times. need to create a new object for each cell in row
    const newTd = document.createElement('td');
    // console.log('For loop, are you running?');
    newTr.appendChild(newTd);
  }
}

// makeRow();

const button = document.getElementById('add-row');

button.addEventListener('click', makeRow);

table.addEventListener('click', colorize);

let cellColor = 'lavender';

//pass cell color thru colorize
function colorize() {
  // console.log('clicked!');
  let target = event.target;

  if (!target.className && target.id !== 'board'){
    target.className = cellColor;
  } else {
    target.className = '';
  }
}

const select = document.getElementById('color-change');

select.addEventListener('change', function(event) {
  // console.log(event.target.value);
  cellColor = event.target.value;
  console.log(cellColor);
});
