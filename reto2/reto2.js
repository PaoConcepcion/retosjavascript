// var array = [7,5,3,4];
reto2([7,5,3,4]);
reto2([1,5,6,7,8]);
reto2([4,8,13,7,0,5,2,8,10]);
reto2([-6,7,0,-5]);
reto2([19,5,7,2,27,10,0,0,1,5]);

function reto2(array){
    var lado = Math.sqrt(array.length);

    if ( lado % 1 == 0 ){
        console.log("Se puede hacer matriz cuadrada");
        
        var matriz = Array.from(Array(lado), () => new Array(lado));

        var k = 0;

        var cadena = "";

        for (let i = 0; i < lado; i++){
            for (let j = 0; j < lado; j++){
                matriz[i][j] = array[k++];
                cadena += matriz[i][j] + " ";
                
            }
            console.log(cadena);
            cadena = ""
        }

        var diagonal1 = 0;
        var diagonal2 = 0;
        
        for (let i = 0; i < lado; i++){
            diagonal1 += matriz[i][i];
            diagonal2 += matriz[i][lado - i - 1];
        }

        console.log("Diagonal 1 -> " + diagonal1);
        console.log("Diagonal 2 -> " + diagonal2);

        var resta = diagonal1 - diagonal2;
        if (resta < 0) 
        resta *= -1;

        console.log("Diferencia -> " + resta);


    } else {
        console.log("El array no se puede convertir en matriz cuadrada");
    }

}

