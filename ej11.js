/*
Escribe una función "alphaSort" que ordene un array de cadenas alfabéticamente.
Ejemplos:
alphaSort(['b', 'a', 'c']) -> ['a', 'b', 'c']
*/

function alpha_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array.length - i - 1); j++) {
      if (array[j].charCodeAt(0) > array[j+1].charCodeAt(0)) {
        let aux = array[j];
        array[j] = array[j+1]; 
        array[j+1] = aux; 
      } 
    }
  }
  return array;
}
  
console.log(alpha_sort(["a", "b", "z", "p", "i", "o"]));
