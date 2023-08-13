//Agregando Caminos 
let edad = 55; 
if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad === 21) {
    console.log("¡Bienvenido al bar! ¡Felicidades por haber llegado a la mayoría de edad!");
} else if (edad % 2 !== 0) {
    console.log("¿Sabías que tu edad es impar?");
}

if (edad < 18) {
    console.log("No puede pasar al bar.");
} else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else {
    console.log("Puede pasar al bar y tomar alcohol.");
}

//TotalAPagar() 
function totalAPagar(vehiculo, litrosConsumidos) {
    let precioPorLitro;
    switch (vehiculo) {
        case 'coche':
            precioPorLitro = 86;
            break;
        case 'moto':
            precioPorLitro = 70;
            break;
        case 'autobús':
            precioPorLitro = 55;
            break;
        default:
            console.log("Vehículo no reconocido.");
            return;
    }
    let total = litrosConsumidos * precioPorLitro;
    if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
        total += 50;
    } else if (litrosConsumidos > 25) {
        total += 25;
    }
    return total;
}

console.log("Total a pagar:", totalAPagar('coche', 40));   
console.log("Total a pagar:", totalAPagar('moto', 15));    
console.log("Total a pagar:", totalAPagar('autobús', 20)); 

//Local de sándwiches
function calcularTotal(sandwichBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let precioSandwichBase;

    switch (sandwichBase) {
        case 'pollo':
            precioSandwichBase = 150;
            break;
        case 'carne':
            precioSandwichBase = 200;
            break;
        case 'veggie':
            precioSandwichBase = 100;
            break;
        default:
            console.log("Sandwich base no reconocido.");
            return;
    }

    let precioPan;

    switch (tipoPan) {
        case 'blanco':
            precioPan = 50;
            break;
        case 'negro':
            precioPan = 60;
            break;
        case 's/gluten':
            precioPan = 75;
            break;
        default:
            console.log("Tipo de pan no reconocido.");
            return;
    }

    let totalAdicionales = 0;

    if (queso) totalAdicionales += 20;
    if (tomate) totalAdicionales += 15;
    if (lechuga) totalAdicionales += 10;
    if (cebolla) totalAdicionales += 15;
    if (mayonesa) totalAdicionales += 5;
    if (mostaza) totalAdicionales += 5;

    return precioSandwichBase + precioPan + totalAdicionales;
}
console.log("Total a pagar por el sanduche:", calcularTotal('pollo', 'blanco', true, false, true, false, false, true));

//¿Cual es el número secreto? 

function verificarNumero(numeroIngresado) {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1; 
    
    if (numeroIngresado === numeroSecreto) {
        return "¡Felicitaciones! ¡Acertaste el número secreto!";
    } else {
        return `No has acertado. Intentalo de nuevo. Ingresaste: ${numeroIngresado}, Número secreto: ${numeroSecreto}`;
    }
}
const numeroIngresado = 5;
console.log(verificarNumero(numeroIngresado));

//abrirParacaidas() 
function abrirParacaidas(velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        return "¡Abre el paracaídas!";
    } else {
        return "No es necesario abrir el paracaídas.";
    }
}
console.log(abrirParacaidas(800, 2500));  // Debería mostrar "¡Abre el paracaídas!"
console.log(abrirParacaidas(1200, 2700)); // Debería mostrar "No es necesario abrir el paracaídas."