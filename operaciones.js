const fs =require('fs');;

const registrar=   (nombre,edad,animal,color,enfermedad)=>{
        const citas = JSON.parse(fs.readFileSync('citas.json','utf8'))
        citas.push({nombre, edad, animal, color, enfermedad})
        fs.writeFileSync('citas.json',JSON.stringify(citas))
}
 const leer = ()=>{
        console.log(JSON.parse(fs.readFileSync('citas.json','utf8')))
 }

module.exports={registrar,leer};

