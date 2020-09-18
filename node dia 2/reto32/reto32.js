function greeting(nombre){
    return "Hola " + nombre 

    
    }

    console.log(greeting("Paul"))
    

    module.exports = {
        greeting
    };



    const saludo = require("./reto32.js");

    console.log(saludo.greeting("Javi"))

