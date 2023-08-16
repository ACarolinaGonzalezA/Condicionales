const prompt = require("prompt-sync")({ sigint: true });


//Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
function mostrarNumerosSiguientes (numero){
    for(let i= numero + 1; i<=numero +10; i++){
        console.log(i);
    }
}
mostrarNumerosSiguientes(2);

//Imprimir los números entre el 5 y el 20, saltando de tres en tres.
function saltandoDeTresEnTres(numeroInicial, numeroFinal, salto){
    for (let i=numeroInicial; i<= numeroFinal; i+=salto){
        console.log(i);
    }
}
saltandoDeTresEnTres(5, 20, 3);

//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
function sumarNumeros(minimo, maximo){
    let suma=0;
    for (let i=minimo; i<=maximo; i++){
        suma+=i;
    }
    return suma;
}
console.log("la sumatoria entre 0 y 100 es " + sumarNumeros(0,100));

//Dado un número entero positivo, mostrar su factorial. El factorial de
//un número se obtiene multiplicando todos los números enteros
//positivos que hay entre el 1 y ese número.

function calculaFactorial(numero){
    if (numero===0 || numero ===1){
        return 1;
    }else{
        let factorial=1;
        for (let i=2; i<=numero; i++){
            factorial *=i;
        }
        return factorial;
    }
}
const numeroIngresado = parseInt(prompt("Ingrese un número entero positivo:"));
if (numeroIngresado >= 0) {
    const factorial = calculaFactorial(numeroIngresado);
    console.log(`El factorial de ${numeroIngresado} es: ${factorial}`);
} else {
    console.log("Ingrese un número entero positivo.");
}


  //Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.

function mostrarSecuenciaFibonacci(hastaValor) {
    let numeroAnterior = 0;
    let numeroActual = 1;

    while (numeroAnterior <= hastaValor) {
    console.log(numeroAnterior);
    
    let siguienteNumero = numeroAnterior + numeroActual;
    numeroAnterior = numeroActual;
    numeroActual = siguienteNumero;
    }
}
const valorIngresado = parseInt(prompt("Ingrese un valor para mostrar la secuencia de Fibonacci:"));
if (!isNaN(valorIngresado)) {
    mostrarSecuenciaFibonacci(valorIngresado);
} else {
    console.log("Ingrese un valor numérico válido.");
}