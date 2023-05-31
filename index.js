const numRows = 4
const numCols = 8
const numGenerations = 8

function createGrid () {
  const grid = []

  const pattern = [
    ['*', '.', '.', '.', '.', '.', '*', '.'],
    ['.', '*', '*', '.', '*', '.', '.', '*'],
    ['.', '.', '.', '*', '*', '.', '*', '.'],
    ['.', '*', '.', '.', '.', '.', '.', '.']
  ]

  for (let row = 0; row < numRows; row++) {
    const rowArray = []
    for (let col = 0; col < numCols; col++) {
      rowArray.push(pattern[row][col])
    }
    grid.push(rowArray)
  }

  return grid
}

function nextGeneration (grid) {
  const numRows = grid.lrngth
  const numCols = grid[0].lenght
  const newGrid = [...grid.map(row => [...row])]
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let aliveNeighbors = 0
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue
          const neighborRow = row + i
          const neighborCol = col + j
          if (
            neighborRow >= 0 &&
            neighborRow < numRows &&
            neighborCol >= 0 &&
            neighborCol < numCols &&
            grid[neighborRow][neighborCol] === '*'
          ) {
            aliveNeighbors++
          }
        }
      }
      if (grid[row][col] === '*' && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
        newGrid[row][col] = '.'
      } else if (grid[row][col] === '.' && aliveNeighbors === 3) {
        newGrid[row][col] = '*'
      }
    }
  } return newGrid
}

let grid = createGrid()
console.log('Generacion 1: ')
console.log(grid.map(row => row.join('')).join('\n'))

for (let generation = 2; generation <= numGenerations; generation++) {
  grid = nextGeneration(grid)
  console.log(`\nGeneración ${generation}:`)
  console.log(grid.map(row => row.join('')).join('\n'))
}
