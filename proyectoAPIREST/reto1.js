

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Professional = require("./professional")



app.use(bodyParser.json());


let professional1 = new Professional



app.get("/", function(request, response){
    let respuesta = {error:true, codigo:200, mensaje: "Punto de inicio"};
    response.send(respuesta);
});

app.post("/professional",function(request,response){

    professional1.name = request.body.name;
    professional1.age = request.body.age;
    professional1.genre = request.body.genre;
    professional1.weight = request.body.weight;
    professional1.height = request.body.height;
    professional1.hairColor = request.body.hairColor;
    professional1.eyeColor = request.body.eyeColor;
    professional1.race = request.body.race;
    professional1.isRetired = request.body.isRetired;
    professional1.nationality = request.body.nationality;
    professional1.oscarsNumber = request.body.oscarsNumber;
    professional1.profession = request.body.profession;

    let respuesta = {error:false,codigo:200, mensaje:"Professional created", professional1};

    response.send(respuesta);
});

app.get("/professional", function(request, response){
    let respuesta = {error:false,codigo:200, mensaje:"Professional created", professional1};

    response.send(respuesta);
});


app.put("/professional", function(request, response){
    professional1.name = request.body.name;
    professional1.age = request.body.age;
    professional1.genre = request.body.genre;
    professional1.weight = request.body.weight;
    professional1.height = request.body.height;
    professional1.hairColor = request.body.hairColor;
    professional1.eyeColor = request.body.eyeColor;
    professional1.race = request.body.race;
    professional1.isRetired = request.body.isRetired;
    professional1.nationality = request.body.nationality;
    professional1.oscarsNumber = request.body.oscarsNumber;
    professional1.profession = request.body.profession;

    let respuesta = {error:false,codigo:200, mensaje:"Professional updated", professional1};

    response.send(respuesta);

});

app.delete("/professional", function(request, response){

    let professional1 = null

    let respuesta = {error:false,codigo:200, mensaje:"Professional deleted", professional1};

    response.send(respuesta);

});

app.listen(1500);