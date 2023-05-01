// Escribir una función to_upper_case que reciba un string y devuelva el string convertido a mayúsculas.

function to_upper_case(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let current_letter = str[i];
    let current_code = current_letter.charCodeAt(current_letter);
    if (current_code >= 65 && current_code <= 90 || !(current_code >= 97 && current_code <= 122)) {
      result += current_letter;
    }
    else {
      let new_code = current_code - 32;
      result += String.fromCharCode(new_code);
    }
  }
  return result;
}

console.log(to_upper_case("sexo duro"));
