const { registrar, leer, vaciarJSON } = require("./operaciones");

const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);


if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
  leer();
} else if (operacion === "vaciar") {
  vaciarJSON("citas.json");
} else {
  console.log("Operación no válida, solo puede registrar, leer o vaciar");
}
