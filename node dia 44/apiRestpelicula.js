const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Professional = require("./professional");
const Movie = require("./peliculas.js");
const { send } = require("process");
const { kMaxLength } = require("buffer");


app.use(bodyParser.json());


let actors = []




var peliculas = [];

var pelicula = new Movie("Ovejas asesinas", 2002, "Spain", "Terror");

pelicula.actors = [];
pelicula.director = Object;
pelicula.writer = "Armando Armado";
pelicula.language = "Spanish";
pelicula.plataform = "Netflix";
pelicula.isMCU = true;
pelicula.mainCharacterName = "Martin Cabrales";
pelicula.producer = "Jordi ENP";
pelicula.distributor = "Mis Cojo...";
pelicula.guionista = Object;

app.get("/pelicula", function(request,response){
    

    
    response.send(pelicula)
});

app.get("/pelicula/1actor", function(request,response){
    response.send(pelicula.actors)
});


app.get("/pelicula/actors", function(request,response){

    if (pelicula.actors[request.body.id] > actors.length){
                response.send("Pelicula no encontrada")
            } else {
                response.send(pelicula.actors[request.body.id])
            }
});

app.get("/pelicula/director", function(request,response){
    response.send(pelicula.director)
});

app.get("/pelicula/guionista", function(request,response){
    response.send(pelicula.guionista)
});

app.post("/pelicula/actors", function(request,response){
    var actor = new Professional(request.body.name,
     request.body.age,request.body.isRetired,
     request.body.nationality,
     request.body.oscarsNumber)
     

     pelicula.actors.push(actor);

     response.send("Profesional de actors creado");


});

app.post("/pelicula/director", function(request,response){
    var director1 = new Professional(request.body.name,
     request.body.age,request.body.isRetired,
     request.body.nationality,
     request.body.oscarsNumber)
     

     pelicula.director = director1;

     response.send("Director creado");
    

});

app.post("/pelicula/guionista", function(request,response){
    var guionista1 = new Professional(request.body.name,
     request.body.age,request.body.isRetired,
     request.body.nationality,
     request.body.oscarsNumber)

     pelicula.guionista = guionista1;

     response.send("Guionista creado");

});

app.put("/pelicula/actors", function(request,response){
    pelicula.actors[request.body.id].name = request.body.name;
    pelicula.actors[request.body.id].age = request.body.age;
    pelicula.actors[request.body.id].isRetired = request.body.isRetired;
    pelicula.actors[request.body.id].nationality = request.body.nationality;
    pelicula.actors[request.body.id].oscarsNumber = request.body.oscarsNumber;

    response.send(pelicula.actors)
});

app.put("/pelicula/director", function(request,response){
    pelicula.director.name = request.body.name;
    pelicula.director.age = request.body.age;
    pelicula.director.isRetired = request.body.isRetired;
    pelicula.director.nationality = request.body.nationality;
    pelicula.director.oscarsNumber = request.body.oscarsNumber;
    response.send(pelicula.director)
});


app.put("/pelicula/guionista", function(request,response){
    pelicula.guionista.name = request.body.name;
    pelicula.guionista.age = request.body.age;
    pelicula.guionista.isRetired = request.body.isRetired;
    pelicula.guionista.nationality = request.body.nationality;
    pelicula.guionista.oscarsNumber = request.body.oscarsNumber;
    response.send(pelicula.guionista)
});

app.delete("/pelicula/actor", function(request, response){

    actors.splice(request.body.id,1);
    response.send("Actor eliminado");

});


app.delete("/pelicula/director", function(request, response){

     pelicula.director = null
    response.send("Director eliminado");

});


app.delete("/pelicula/guionista", function(request, response){

    pelicula.guionista = null
    response.send("Guionista eliminado");

});


app.listen(1200);








// {
//     "name": "Carlos",
//     "age": 23,
//     "isRetired": false,
//     "nationality": "Español",
//     "osacarsNumber": 4
// }