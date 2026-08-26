for (let i = 1; i <= 30; i++) { // recorre los numeros del 1 al 30
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); // si el numero es divisible por 3 y 5, imprime "FizzBuzz"
  } else if (i % 3 === 0) { // si el numero es divisible por 3, imprime "Fizz"
    console.log("Fizz");
  } else if (i % 5 === 0) { // si el numero es divisible por 5, imprime "Buzz"
    console.log("Buzz");
  } else {
    console.log(i); // si el numero no es divisible por 3 ni por 5, imprime el numero
  }
}