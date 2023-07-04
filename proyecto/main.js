let nums = prompt("Ingresa los números separados por comas:");

// Convertir la cadena de entrada en un array de números
let numArray = nums.split(",").map(Number);

// Declarar variables y objetos necesarios para simular el proceso seleccionado
let resultado;

// Crear funciones para realizar operaciones
function suma(array) {
let sum = 0;
for (let num of array) {
    sum += num;
}
return sum;
}

function resta(array) {
let subtract = array[0];
for (let i = 1; i < array.length; i++) {
    subtract -= array[i];
}
return subtract;
}

function multiplicacion(array) {
let product = 1;
for (let num of array) {
    product *= num;
}
return product;
}

function division(array) {
let divide = array[0];
for (let i = 1; i < array.length; i++) {
    divide /= array[i];
}
return divide;
}

// Efectuar una salida del resultado
console.log("Operaciones disponibles:");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");

let opcion = parseInt(prompt("Selecciona una operación (1-4):"));

switch (opcion) {
case 1:
    resultado = suma(numArray);
    console.log("El resultado de la suma es: " + resultado);
    break;
case 2:
    resultado = resta(numArray);
    console.log("El resultado de la resta es: " + resultado);
    break;
case 3:
    resultado = multiplicacion(numArray);
    console.log("El resultado de la multiplicación es: " + resultado);
    break;
case 4:
    resultado = division(numArray);
    console.log("El resultado de la división es: " + resultado);
    break;
default:
    console.log("Opción inválida.");
}
