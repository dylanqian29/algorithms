/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  return checkCol(board) && checkRow(board) && check3by3(board)

};

function checkCol(grid) {
  let set
  for (let i = 0; i < grid.length; i++) {
    let set = new Set()
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] !== '.') {
        if (set.has(grid[j][i])) {
          return false
        } else {
          set.add(grid[j][i])
        }
      }
    }
  }
  return true
}

function checkRow(grid) {
  let set
  for (let i = 0; i < grid.length; i++) {
    let set = new Set()
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] !== '.') {
        if (set.has(grid[i][j])) {
          return false
        } else {
          set.add(grid[i][j])
        }
      }
    }
  }
  return true
}

function check3by3(grid) {
  let j = 0
  let set, current;
  while (j < grid.length) {
    let i = 0;
    while (i < grid.length) {
      set = new Set()
      for (k = i; k < i + 3; k++) {
        for (z = j; z < j + 3; z++) {
          current = grid[k][z]
          if (current !== '.') {
            if (set.has(current)) {
              return false
            } else {
              set.add(current)
            }
          }
        }
      }
      i += 3
    }
    j += 3
  }
  return true
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  let cols = [];
  let rows = [];
  let boxes = []
  for(var i=0; i<9; i++) {
      cols[i] = new Array(9).fill(0);
      rows[i] = new Array(9).fill(0);
      boxes[i] = new Array(9).fill(0);
  }
  let value, boxCol
  for (let row=0; row< board.length; row++) {
      for (let col=0; col<board.length; col++){
          value = board[row][col]
    if (value === "."){
      continue;
    }

          // test columns
          if(cols[row][value-1] === 1) {
              return false
          } else {
              cols[row][value-1] =1
          }

          // test rows
          if(rows[col][value-1] === 1) {
              return false
          } else {
              rows[col][value-1] =1
          }
          
          // test rows
          boxCol = Math.floor(row/3) * 3 + Math.floor(col/3)
          if(boxes[boxCol][value-1] === 1) {
              return false
          } else {
              boxes[boxCol][value-1] =1
          }
      }
  }
  return true
};
