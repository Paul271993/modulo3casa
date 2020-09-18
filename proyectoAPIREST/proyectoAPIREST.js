const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Professional = require("./professional");
const { send } = require("process");


app.use(bodyParser.json());


let professionales = []




app.get("/", function(request, response){
    let respuesta = {error:true, codigo:200, mensaje: "Punto de inicio"};
    response.send(respuesta);
});

app.get("/professionales", function(request, response){
    let respuesta = {error:false,codigo:200, mensaje:"Professionales created", professional1};

    response.send(respuesta);
});

app.post("/professionales",function(request,response){

    var professional = new Professional(request.body.name,
        request.body.age,
        request.body.genre,
        request.body.weight,
        request.body.height,
        request.body.hairColor,
        request.body.eyeColor,
        request.body.race,
        request.body.isRetired,
        request.body.nationality,
        request.body.oscarsNumber,
        request.body.profession)
       
    professionales.push(professional)
    response.send("Profesional creado")

   

    let respuesta = {error:false,codigo:200, mensaje:"Professional creados", professional1};

    response.send(respuesta);
});
app.listen(2000);


