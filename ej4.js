/*
Realizar un programa que:
a. Muestre todos los números primos entre 1 y 100. (Un nro. es primo cuando es 
divisible solamente por 1 y por sí mismo)
b. Contar y mostrar la cantidad de primos encontrados.
*/

const n = 100;
let multiples_list = [];
let prime_quantity = 0;

for (let i = 2; i <= n; i++) {
  if (!multiples_list.includes(i)) {
    console.log(i);
    for (let j = i**2; j <= n; j += i) {
      multiples_list.push(j);
    }
    prime_quantity++;
  }
}

console.log(`Found ${prime_quantity} prime numbers`);
