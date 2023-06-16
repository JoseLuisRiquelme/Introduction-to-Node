const fs = require('fs');
citas=[]

//fs.writeFileSync('citas.json',JSON.stringify(citas));
//fs.writeFileSync('operaciones.js',operaciones);

const {registrar,leer}=require('./operaciones')
const[nombre, edad, animal, color, enfermedad]=process.argv.slice(3);
const [operacion]=process.argv.slice(2);


if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
    }
if(operacion === "leer"){
    leer()
    }
    

