/*
Ingresar un número entero mayor a 0. Debe dibujar un triángulo rectángulo con * con tantas filas como el número indicado.
En cada fila se va incrementando la cantidad de asteriscos. Por ejemplo, si se ingresa el número 6 debe mostrar en
pantalla:
*
**
***
****
*****
******
*/

num = parseInt(prompt("Enter a number: "))

while (num <= 0) {
  console.log("You can only enter numbers greater than 0.");
  num = parseInt(prompt("Enter a number: "));
}

for (let i = 0; i < num + 1; i++)
  console.log("*".repeat(i));
