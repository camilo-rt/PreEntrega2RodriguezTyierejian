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

function potencia(array) {
    let power = array[0];
    for (let i = 1; i < array.length; i++) {
    power = Math.pow(power, array[i]);
    }
    return power;
}

function modulo(array) {
    let dividend = array[0];
    for (let i = 1; i < array.length; i++) {
    dividend %= array[i];
    }
    return dividend;
}

function maximo(array) {
    return Math.max(...array);
}

function minimo(array) {
    return Math.min(...array);
}

function promedio(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
}

function factorial(num) {
    if (num === 0 || num === 1) {
    return 1;
    } else {
      return num * factorial(num - 1);
    }
}


// Efectuar una salida del resultado
console.log("Operaciones disponibles:");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");
console.log("5. Potencia");
console.log("6. Módulo");
console.log("7. Valor Máximo");
console.log("8. Valor Mínimo");
console.log("9. Promedio");
console.log("10. Factorial");

let opcion = parseInt(prompt("Selecciona una operación (1-10):"));

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
    console.log("Opción inválida.");
case 5:
    resultado = potencia(numArray);
    console.log("El resultado de la potencia es: " + resultado);
    break;
case 6:
    resultado = modulo(numArray);
    console.log("El resultado del módulo es: " + resultado);
    break;
case 7:
    resultado = maximo(numArray);
    console.log("El valor máximo es: " + resultado);
    break;
case 8:
    resultado = minimo(numArray);
    console.log("El valor mínimo es: " + resultado);
    break;
case 9:
    resultado = promedio(numArray);
    console.log("El promedio es: " + resultado);
    break;
case 10:
    resultado = factorial(numArray[0]);
    console.log("El factorial es: " + resultado);
    break;
default:
    console.log("Opción inválida.");
}

// Efectuar una salida del resultado...
resultadoDiv.textContent = "";

// Guardar el array numArray en el almacenamiento local
localStorage.setItem("numArray", JSON.stringify(numArray));

// Leer el array numArray desde el almacenamiento local
let storedArray = localStorage.getItem("numArray");
if (storedArray) {
numArray = JSON.parse(storedArray);
}