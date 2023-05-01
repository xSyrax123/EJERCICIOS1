/*
Escribe un bucle while que lea los enteros de la entrada y calcule el entero finalNum como sigue:
- Si la entrada es impar, suma la entrada multiplicada por 2 a Número final.
- En caso contrario, resta la entrada dividida por 2 de número final.
El bucle itera hasta que se lee un entero negativo.
Ej: Si la entrada es 6 3 4 -2, entonces la salida es:
finalNum es 1
*/

let num = 0;
let finalNum = 0;

while (num >= 0) {  
  if (num % 2) {
    finalNum += num * 2;
  }
  else {
    finalNum -= num / 2;
  }  
  num = parseInt(prompt("Enter a number: "));
}

console.log(finalNum);