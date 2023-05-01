// Imprimir los números perfectos en un rango de números enteros determinado por el usuario.

function find_perfect_numbers(min_index, max_index) {
  for (let i = min_index; i <= max_index; i++) {
    let divisors_sum = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) divisors_sum += j;
    }
    if (divisors_sum == i) console.log(i);
  }
}
  
let min_index = parseInt(prompt("Enter the first value of the range:: "));
let max_index = parseInt(prompt("Enter the second value of the range: "));
find_perfect_numbers(min_index, max_index);
