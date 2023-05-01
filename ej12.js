/*
Escribe una función "strLengthSort" que ordene un array de cadenas por la longitud de
cada cadena. Coloca las cadenas más cortas primero.
Ejemplos:
strLengthSort(['Manzana', 'Plátano', 'Cereza']) -> ['Manzana', 'Cereza', 'Plátano']
*/

function strLengthSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && temp.length < array[j].length) {
      array[j+1] = array[j];
      console.log(i, j);
      j -= 1;
    }
    array[j+1] = temp;
  }
  return array;
}       
   
const array = ["Apple", "Cherry", "Banana"];
console.log(strLengthSort(array));
