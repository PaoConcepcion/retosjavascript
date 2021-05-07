imc (78, 1.69, 92, 1.92);
imc (95, 1.88, 85, 1.76);

function imc(peso1, estatura1, peso2, estatura2){
    var mario = {
        peso: peso1,
        estatura: estatura1
    }
    
    var luigi = {
        peso: peso2,
        estatura: estatura2
    }
    
    mario.imc = mario.peso / mario.estatura ** 2; 
    console.log("Mario IMC: " + mario.imc);
    
    luigi.imc = luigi.peso / luigi.estatura ** 2; 
    console.log("Luigi IMC: " + luigi.imc);
    
    const marioMayorIMC = mario.imc > luigi.imc;
    
    console.log("marioMayorIMC: " + marioMayorIMC);
}
