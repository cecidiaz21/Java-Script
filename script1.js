/*Actividad práctica
Crear funciones para sumar, restar, multiplicar y dividir.
Crear funciones para convertir cadenas a mayúsculas o invertirlas.
Ejercicios: */

//1 - Declara una función que calcule el área de un triángulo.
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
    }
    console.log("El área del triángulo es: " + areaTriangulo(5, 10));

//2-Crea una función anónima que determine si un número es par o impar.
function esParImpar(num) {
    if (num % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
        }
    }
    console.log(esParImpar(7));

//3- Usa una función de flecha para multiplicar dos números.
    const multiplicar = (a, b) => a * b;
    console.log("El resultado de la multiplicación es: " + multiplicar(4, 6));  

//4- Escribe una función que convierta una palabra a mayúsculas.
    function convertirMayusculas(palabra) {
    return palabra.toUpperCase();
    }   
    console.log(convertirMayusculas("palabra en mayúsculas"));

//5-Haz una función que reciba dos números y retorne el mayor de ellos.
    function cualEsMayor(num1, num2) {
    return (num1 > num2) ? num1 : num2;
    }
    console.log("El número mayor es: " + cualEsMayor(10, 20));

//6- Crea una función que invierta una cadena.
    function invertirCadena(string) {
    return string.split("").reverse().join("");
    }   
    console.log(invertirCadena("Hola Mundo"));

//7-Declara una función que convierta grados Celsius a Fahrenheit.
    function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
    }   
    console.log("La temperatura en Fahrenheit es: " + celsiusAFahrenheit(25));
//8-Escribe una función que verifique si una palabra es un palíndromo.
//9-Haz una función que calcule la suma de los números de un arreglo.
//10-Usa funciones para simular una calculadora básica. */
