/**
 * @param {character[][]} grid
 * @return {number}
 */




function togglePiece(i, j, board) {
  board[i][j] = '0'
}


function findOneIsland(row, col, grid) {
  if (grid[row][col] === "1") {
    togglePiece(row, col, grid)
    if (row + 1 < grid.length) {
      findOneIsland(row + 1, col, grid)
    }
    if (row - 1 >= 0) {
      findOneIsland(row - 1, col, grid)
    }
    if (col - 1 >= 0) {
      findOneIsland(row, col - 1, grid)
    }
    if (col + 1 < grid[0].length) {
      findOneIsland(row, col + 1, grid)
    }

  }
}

var numIslands = function (grid) {
  let counter = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        console.log(counter)
        counter++
        findOneIsland(i, j, grid)
      }
    }
  }
  return counter
};






























// var checkConnected = function (i, j, board) {

//   if (i - 1 >= 0) {
//     if (board[i - 1][j] === '1') {
//       return [i - 1, j]
//     }
//   }
//   // } else if (j+1 < 5 ){
//   //   if (board[i][j+1] === '1'){
//   //     return board[i][j+1]
//   //   }
//   // }
//   // else if (i+1 < 4){
//   //   if (board[i + 1][j]==='1'){
//   //     return board[i + 1][j]
//   //   }
//   // }  else if (j-1>=0){
//   //   if (board[i ][j-1]==='1'){
//   //     return board[i ][j-1]
//   //   }
//   // }
// }


// var board = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]

// console.log(board)

// // board[-1,4]
// checkConnected(0, 0, board)



// var numIslands = function (grid) {
//   var islands = []
//   for (let i = 0; i < grid.length; i++) {
//     var singleIsland = []
//     for (let j = 0; j < grid[0].length; j++) {

//       if (grid[i][j] === '1') {
//         singleIsland.push(Number(i.toString() + j))
//         if (i === grid.length - 1) {
//           islands.push(singleIsland)
//         }
//       } else if (grid[i][j] === '0' && singleIsland.length > 0) {
//         islands.push(singleIsland)
//         singleIsland = []
//       }
//     }
//   }
//   console.log(islands)
//   numberofislands = islands.length
//   for (let x = 0; x < islands.length; x++) {
//     for (let y = 0; y < islands[x].length; y++) {
//       let checked = islands[x][y] + 10
//       for (let z = 0; z < islands.length; z++) {
//         // console.log(islands[z].includes(checked))
//         if (islands[z].includes(checked)) {

//         }
//       }
//     }
//   }
// };

// numIslands(board)