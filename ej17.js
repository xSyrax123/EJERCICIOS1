/*
Ingresar un número entero mayor a 0. Debe dibujar una pirámide con * con tantas filas como el número indicado. En cada 
fila se va incrementando la cantidad de asteriscos de 2 en 2.
Por ejemplo, si se ingresa el número 5 debe mostrar en pantalla:
    *
   ***
  *****
 *******
*********
*/

num = parseInt(prompt("Enter a number greater than 0: "))

while (num <= 0) {
  console.log("You can only enter numbers greater than 0.")
  num = parseInt(prompt("Enter a number greater than 0: "))
}

for (let i = 0; i < num; i++) 
  console.log(" ".repeat(num-i) + "*".repeat(i*2+1));
