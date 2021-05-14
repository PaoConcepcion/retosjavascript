funcion(4,2);


function funcion(num1, num2){
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    console.log(num1 + " - " + num2 + " = " + (num1 - num2));
    console.log(num1 + " * " + num2 + " = " + (num1 * num2));
    console.log(num1 + " / " + num2 + " = " + (num1 / num2));
}

let funcionFlecha = (num1, num2) => {
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    console.log(num1 + " - " + num2 + " = " + (num1 - num2));
    console.log(num1 + " * " + num2 + " = " + (num1 * num2));
    console.log(num1 + " / " + num2 + " = " + (num1 / num2));
}

funcionFlecha(8,4);

let sum = x => x+x;

array = [1,2,3,4,5,6];

array.forEach(element => {
    console.log(element);
});

array.forEach(element => console.log(element));

array.forEach(function (x) {
    console.log(x);
});


function printName(callback) {
    callback('Hola');
}

function print (name) {
    console.log(name);
}

printName(function(menssage){
    console.log(menssage);
})

printName(print);
