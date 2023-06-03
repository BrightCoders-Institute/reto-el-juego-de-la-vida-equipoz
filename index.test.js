const GameOfLife = require('./index')
const { expect, test, describe, beforeEach } = require('@jest/globals')

describe('GameOfLife', () => {
  let game

  beforeEach(() => {
    const numRows = 4
    const numCols = 8
    const numGenerations = 8
    game = new GameOfLife(numRows, numCols, numGenerations)
  })

  test('createGrid() should create a grid with the correct dimensions', () => {
    const expectedGrid = [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '*', '.', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ]

    expect(game.grid).toEqual(expectedGrid)
  })

  test('nextGeneration() should generate the next generation of the grid correctly', () => {
    const expectedGrid = [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ]

    game.nextGeneration()

    expect(game.grid).toEqual(expectedGrid)
  })

  test('should update a live cell to dead if it has less than 2 or more than 3 live neighbors', () => {
    const game = new GameOfLife(4, 8, 1)
    game.grid[1][1] = '*'
    game.grid[1][2] = '.'
    game.grid[2][1] = '.'
    game.grid[2][2] = '.'
    game.nextGeneration()
    expect(game.grid[1][1]).toBe('.')
  })

  test('should update a dead cell to live if it has exactly 3 live neighbors', () => {
    const game = new GameOfLife(4, 8, 1)
    game.grid[1][1] = '.'
    game.grid[1][2] = '*'
    game.grid[1][3] = '.'
    game.grid[2][1] = '*'
    game.grid[2][2] = '.'
    game.grid[2][3] = '*'
    game.nextGeneration()
    expect(game.grid[2][2]).toBe('*')
  })
})
