var x = 4;
var y = 8;

let Cuadricula = [
    [0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0],
];

function drawCell(){
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

starGame();