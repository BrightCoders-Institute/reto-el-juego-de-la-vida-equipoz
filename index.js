const numRows = 4;
const numCols = 8;
const numGenerations = 8;

function createGrid(){
    const grid = [];

    const pattern = [
        ["*", ".", ".", ".", ".", ".", "*", "."],
        [".", "*", "*", ".", "*", ".", ".", "*"],
        [".", ".", ".", "*", "*", ".", "*", "."],
        [".", "*", ".", ".", ".", ".", ".", "."]
    ];

    for(let row = 0; row < numRows; row++){
        const rowArray = [];
        for (let col = 0; col < numCols; col++){
            rowArray.push(pattern[row][col]);
        }
        grid.push(rowArray);
    }

    return grid;
}

function nextGeneration(grid){
    const numRows = grid.length;
    const numCols = grid[0].length;

    const newGrid = [...grid.map(row => [...row])];

    for (let row = 0; row < numRows; row++){
        for (let col = 0; col < numCols; col++){
            let aliveNeighbors = 0;
            for (let i = -1; i <= 1; i++){
                for(let j = -1; j <= 1; j++){
                    if( i === 0 && j === 0) continue;
                    const neighborRow = row + i;
                    const neighborCol = col + j;
                    if(
                        neighborRow >= 0 &&
                        neighborRow < numRows &&
                        neighborCol >= 0 &&
                        neighborCol < numCols &&
                        grid[neighborRow][neighborCol] === "*"
                    ){
                        aliveNeighbors++;
                    }
                }
            }

            /*Reglas del juego*/
            if(grid[row][col] === "*" && (aliveNeighbors < 2 || aliveNeighbors > 3)){
                newGrid[row][col] = ".";
            }else if(grid[row][col] === "." && aliveNeighbors === 3 ){
                newGrid[row][col] = "*";
            }
        }
    }
    return newGrid;
}

let grid = createGrid();
console.log("Generacion 1: ");
console.log(grid.map(row => row.join("")).join("\n"));

for(let generation = 2; generation <= numGenerations; generation++){
    grid = nextGeneration(grid);
    console.log(`\nGeneración ${generation}:`);
    console.log(grid.map(row => row.join("")).join("\n"));
}

/* function drawCell(){
    console.clear();
    for(let i=0; i< Cuadricula.length; i++){
        let row = "";
        for(let j=0; j<Cuadricula[i].length; j++){
            if(Cuadricula[i][j]===0){
                row += ".";
            }else{
                row += "*";
            }
        }
        console-console.log(row);
    }
} 

function update(){
    let newTable = Cuadricula;
    for(let i =0; i<x; i++){
        for(let j = 0; j<y; j++){
            const neighbors = countNeighbors(i,j);
            if (Cuadricula[i][j]==1){
                if(neighbors ===2 || neighbors === 3){
                    newTable[i][j]=1;
                }
            }else{
                if(neighbors ===3){
                    newTable[i][j]=1;
                }
            }
        }
    }
    Cuadricula = newTable;
}

function countNeighbors(row, col){
    let count = 0;
    for ( let i = -1;i <= 1; i++){
        for (let j = -1; j<= 1; j++){
            if( i=== 0 && j == 0)continue;
            const newRow = row + i;
            const newCol = col + j;
            if(
                newRow >= 0 &&
                newRow < x &&
                newCol >= 0 &&
                newCol < y &&
                Cuadricula[newRow][newCol] ===1
            ){
                count++;
            }
            
        }
    }
    return count;
}

function starGame(){
    setInterval(()=>{
        update();
        drawCell();
    }, 2000);
}

starGame(); */