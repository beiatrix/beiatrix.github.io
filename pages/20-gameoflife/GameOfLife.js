class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    // TODO: Create and return an 2D Array
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]

    let result = [];

    // this.height = rows
    // this.width = columns

    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j< this.width; j++) {
        let element = 0;
        row.push(element);
      }
      result.push(row);
    }

    //console.log(result);
    return result;

  }


  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.

    let livingCount = 0;


    for (let i = row-1; i < row+2; i++) {
      for (let j = col-1; j< col+2; j++) {

        //if this cell exists
        if (!(this.getCell(i,j) === null)) {
          //if neighbor is alive
            if (this.board[i][j] === 1) {
              livingCount++;
            }
        }
        // console.log('current coordinates of neighbors: ', `[${i}][${j}]`)
      }
    }

    //if current cell is ME and alive

    if (this.board[row][col] === 1) {
        livingCount--;
    }

    console.log('current coordinates: ', `[${row}][${col}]`)

    console.log(`living count ${livingCount}`);
    return livingCount;

  }


  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    // debugger;
    const newBoard = this.makeBoard();
    console.log(newBoard);

    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors


    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j< this.width; j++) {
        let livingNum = this.livingNeighbors(i, j);
        //if current cell is alive
        if (this.board[i][j] === 1) {
          //current cell has either 2 or 3 living neighbors - LIVE CONDITION
          if (livingNum === 2 || livingNum === 3) {
            newBoard[i][j] = 1;
          }
        } // current cell is dead
        else if (this.board[i][j] === 0) {
          //if cell has exactly 3 live neighbors
          if (livingNum === 3) {
            newBoard[i][j] = 1;
          }
        }
      }
    }

    this.board = newBoard;
  }

  getCell(row, col) {
    if (0 <= col && col < this.width) {
      if (0 <= row && row < this.height) {
        return this.board[row][col];
      }
    }
    return null;

  }

  setCell(value,row,col) {
    if (!(this.getCell(row,col) === null)) {
      this.board[row][col] = value;
    }
  }

  toggleCell(row, col) {
    if (this.getCell(row,col) === 0) {
      this.setCell(1, row, col);
    } else if (this.getCell(row,col) === 1) {
      this.setCell(0, row, col);
    }
  }
}
