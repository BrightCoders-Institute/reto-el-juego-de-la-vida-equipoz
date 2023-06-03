class GameOfLife {
  constructor (numRows, numCols, numGenerations) {
    this.numRows = numRows
    this.numCols = numCols
    this.numGenerations = numGenerations
    this.grid = this.createGrid()
  }

  createGrid () {
    const grid = []

    const pattern = [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '*', '.', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ]
    for (let row = 0; row < this.numRows; row++) {
      const rowArray = []
      for (let col = 0; col < this.numCols; col++) {
        rowArray.push(pattern[row][col])
      }
      grid.push(rowArray)
    }
    return grid
  }

  nextGeneration () {
    const newGrid = [...this.grid.map(row => [...row])]
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        const aliveNeighbors = this.countAliveNeighbors(row, col)
        const cell = this.grid[row][col]
        if (cell === '*' && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
          newGrid[row][col] = '.'
        } else if (cell === '.' && aliveNeighbors === 3) {
          newGrid[row][col] = '*'
        }
      }
    }
    this.grid = newGrid
  }

  countAliveNeighbors (row, col) {
    let aliveNeighbors = 0
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue
        const neighborRow = row + i
        const neighborCol = col + j
        if (this.isInGrid(neighborRow, neighborCol) && this.grid[neighborRow][neighborCol] === '*') {
          aliveNeighbors++
        }
      }
    }
    return aliveNeighbors
  }

  isInGrid (row, col) {
    return row >= 0 && row < this.numRows && col >= 0 && col < this.numCols
  }

  run () {
    console.log('Generacion 1: ')
    console.log(this.grid.map(row => row.join('')).join('\n'))
    for (let generation = 2; generation <= this.numGenerations; generation++) {
      this.nextGeneration()
      console.log(`\nGeneración ${generation}:`)
      console.log(this.grid.map(row => row.join('')).join('\n'))
    }
  }
}

const numRows = 4
const numCols = 8
const numGenerations = 2

const game = new GameOfLife(numRows, numCols, numGenerations)
game.run()
module.exports = GameOfLife
