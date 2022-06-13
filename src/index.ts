let cantidad: number = Number(prompt("Ingrese la cantidad de butacas"));
let butacas: boolean[] = new Array(cantidad);
let cantidadButacasLibres: number = 0;

function Aleatorio(): boolean {
  return Boolean(Math.floor(Math.random() * 2));
}

for (let indice = 0; indice < cantidad; indice++) {
  butacas[indice] = Aleatorio();
}
for (let indice = 0; indice < cantidad; indice++) {
  if (butacas[indice] === false) {
    cantidadButacasLibres = cantidadButacasLibres + 1;
  }
}

console.log(`La cantidad de butacas libres es ${cantidadButacasLibres}`);
