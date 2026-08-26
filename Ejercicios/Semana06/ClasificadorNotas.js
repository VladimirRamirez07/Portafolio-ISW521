let sumaNotas = 0;

for (let i = 1; i <= 5; i++) {
  const nota = Number(prompt(`Ingresa la nota ${i} (0 a 100):`));
  sumaNotas += nota;

  let letra = '';
  if (nota >= 90) letra = 'A';
  else if (nota >= 80) letra = 'B';
  else if (nota >= 70) letra = 'C';
  else if (nota >= 60) letra = 'D';
  else letra = 'F';

  console.log(`Nota ${i}: ${nota} -> Clasificación: ${letra}`);
}

const promedio = sumaNotas / 5;
console.log(`El promedio general es: ${promedio.toFixed(2)}`);