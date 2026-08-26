const numeros = [4, 8, 15, 16, 23, 42]; //diccionario de numeros
let suma = 0; // inicializa la variable suma en 0

for (const num of numeros) { // recorre cada numero en el arreglo
  suma += num; // cada numero en el arreglo se suma a la variable suma
}

console.log("Arreglo:", numeros); // muestra el arreglo de numeros
console.log("Suma total:", suma); // muestra la suma total de los numeros en el arreglo