const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json'));
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log('Cita registrada exitosamente');
}

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json'));
    console.log(citas);
}

const vaciarJSON = (nombreDelArchivo) => {
    fs.writeFileSync(nombreDelArchivo, '[]')
    console.log('Json vaciado');
}

module.exports = { registrar, leer, vaciarJSON};

