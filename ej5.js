/*
Dado un número entero positivo se dice que el crápulo es el número que se obtiene
sumando los dígitos que lo componen. Si el valor de la suma es menor que 10, el 
crápulo es el valor obtenido; sino el crápulo es el crápulo de la suma de los 
dígitos.
Ejemplo:
   Número	      Crápulo
     7               7
    13               4
   492               6
  5678               8
Desarrollar un programa que lea un entero positivo y muestre el valor de su crápulo.
*/

let num = parseInt(prompt("Enter the number: "));
let temp = num;

while (temp > 9) {
  let aux = 0;
  while (temp > 0) {
    aux += temp % 10;
    temp = Math.floor(temp / 10);
  }
  temp = aux;
}

console.log(`The copula of ${num} is ${temp}`); // ¿Cómo mierda se traduce crápulo a inglés? xD
