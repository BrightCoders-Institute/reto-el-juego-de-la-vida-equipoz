var x = 4;
var y = 8;

var matriz = new Array(x);

for (var i = 0; i<x; i++){
    matriz[i] = new Array(y);
    for (var j = 0; j < y; j++){
        matriz[i][j] = '.'
        console.log(matriz[i][j])
    }
}

/* console.log(matriz); */