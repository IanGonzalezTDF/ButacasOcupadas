let cantidad: number = Number(prompt("Ingrese la cantidad de butacas"));
let butacas: number[] = new Array(cantidad);
let indice: number;
for (indice = 0; indice < cantidad; indice++) {
  butacas[indice] = Aleatorio(cantidad);
}
for (indice = 0; indice < cantidad; indice++) {
  console.log(`¿La butaca ${indice + 1} esta ocupada? ${butacas[indice]}`);
}
function Aleatorio(): string {
  return Boolean(Math.floor(Math.random() * 2));
}
