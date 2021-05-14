reto3([7,5,3,4]);
reto3([1,5,6,7,8]);
reto3([4,8,13,7,0,5,2,8,10]);
reto3([-6,7,0,-5]);
reto3([19,5,7,2,27,10,0,0,1,5]);

function reto3(array){
    var lado = Math.sqrt(array.length);

    if ( lado % 1 == 0 ){
        
        var matriz = Array.from(Array(lado), () => new Array(lado));

        var k = 0;

        var cadena = "";

        for (let i = 0; i < lado; i++){
            for (let j = 0; j < lado; j++){
                matriz[i][j] = array[k++];
                cadena += matriz[i][j] + " ";
                
            }
            cadena = ""
        }

        var diagonal1 = 0;
        var diagonal2 = 0;
        
        for (let i = 0; i < lado; i++){
            diagonal1 += matriz[i][i];
            diagonal2 += matriz[i][lado - i - 1];
        }

        var resta = diagonal1 - diagonal2;
        if (resta < 0) 
        resta *= -1;

        return ("Diferencia -> " + resta);


    } else {
        return "El array no se puede convertir en matriz cuadrada";
    }

}

