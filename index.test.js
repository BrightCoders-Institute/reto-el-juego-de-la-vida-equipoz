const GameOfLife = require('./index')
const { expect, test, describe, beforeEach } = require('@jest/globals')

describe('GameOfLife', () => {
  let game

  beforeEach(() => {
    const numRows = 4
    const numCols = 8
    const numGenerations = 2
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
})
