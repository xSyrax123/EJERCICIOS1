/*
Nicómano de Gerasa descubrió la siguiente propiedad de los números naturales:
  * Al sumar el primer impar se obtiene el primer cubo: 1 = 1
  * Al sumar los dos siguientes impares se obtiene el segundo cubo: 3+5 = 2³ = 8
  * Al sumar los tres siguientes impares se obtiene el tercer cubo: 7+9+11 = 3³ = 27
  * Al sumar los cuatro siguientes impares se obtiene el cuarto cubo: 13+15+17+19 = 4³ = 64
  * ...etc...
Escribir un programa para ingresar un número entero positivo y calcular su cubo, 
utilizando exclusivamente esta propiedad.
*/

let num = parseInt(prompt("Ingrese un número: "));
let odd = num*(num-1) + 1;
let result = 0;

for (let i = 0; i < num; i++) {
  result += odd;
  odd += 2;
}

console.log(`El cubo de ${num} es ${result}`);
