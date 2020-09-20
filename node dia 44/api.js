const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Professional = require("./professional");
const Movie = require("./peliculas.js");
const { send } = require("process");


app.use(bodyParser.json());


var profesionales = []

var profesional = new Professional
    




app.get("/", function(request, response){
    let respuesta = {error:true, codigo:200, mensaje: "Punto de inicio"};
    response.send(respuesta);
});


app.get("/profesionales", function(request,response){
    response.send(profesionales)
})


app.get("/profesionales",function(request,response){
    if (profesionales[request.body.id] > profesionales.length){
        response.send("Profesional no encontrado")
    } else {
        response.send(profesionales[request.body.id])
    }
})

app.post("/profesionales",function(request,response){

    var profesional = new Professional(request.body.name,
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
       
    profesionales.push(profesional)
    response.send("Profesional creado")

   
});



app.put("/profesionales", function(request, response){

    

    profesionales[request.body.id].name = request.body.name;
    profesionales[request.body.id].age = request.body.age;
    profesionales[request.body.id].genre = request.body.genre;
    profesionales[request.body.id].weight = request.body.weight;
    profesionales[request.body.id].height = request.body.height;
    profesionales[request.body.id].hairColor = request.body.hairColor;
    profesionales[request.body.id].eyeColor = request.body.eyeColor;
    profesionales[request.body.id].race = request.body.race;
    profesionales[request.body.id].isRetired = request.body.isRetired;
    profesionales[request.body.id].nationality = request.body.nationality;
    profesionales[request.body.id].oscarsNumber = request.body.oscarsNumber;
    profesionales[request.body.id].profession = request.body.profession;

    response.send(profesionales)


});


app.delete("/profesionales", function(request, response){

    profesionales.splice(request.body.id,1);
    response.send("Profesional eliminado");

});
app.listen(2000);

// {
//     "name": "Calamardo",
//     "age": 45,
//     "genre": "Masculino",
//     "weight": 89,
//     "height": 1.98,
//     "hairColor": "Asiatico",
//     "eyeColor": "Negro ",
//     "race": "Negro",
//     "isRetired": false,
//     "nationality": "Español",
//     "oscarsNumber": 9,
//     "profession": "Actor"
// }

//////////////////////////////////////////////////////////////////////





// let actors = profesional


// var peliculas = [];

// var pelicula = new Movie


// // app.get("/peliculas", function(request,response){
// //     if (request.query.id){

// //         response.send(profesionales(request.query.id))
// //     }

    
// //      response.send(peliculas)
// // });

// app.get("/peliculas", function(request,response){

    

//     if (peliculas[request.body.id] > peliculas.length){
//         response.send("Pelicula no encontrada")
//     } else {
//         response.send(peliculas[request.body.id].actors)
//     }
// });

// app.get("/peliculas/actors", function(request,response){
//     response.send(actors[request.body.id])
// })

// app.post("/peliculas/actors", function(request,response){
//        var actors = profesional
//     //    (request.body.name,
//     //     request.body.age,
//     //     request.body.genre,
//     //     request.body.weight,
//     //     request.body.height,
//     //     request.body.hairColor,
//     //     request.body.eyeColor,
//     //     request.body.race,
//     //     request.body.isRetired,
//     //     request.body.nationality,
//     //     request.body.oscarsNumber,
//     //     request.body.profession)

//         profesional.push(actors)

//         response.send("Profesional de actors creado");


// })

// app.post("/peliculas", function(request,response){
//     var pelicula = new Movie(request.body.title,
//          request.body.releaseYear,
//          request.body.nationality,
//          request.body.actors,
//          request.body.director,
//          request.body.writer,
//          request.body.language,
//          request.body.plataform,
//          request.body.isMCU,
//          request.body.mainCharacterName,
//          request.body.producer, 
//          request.body.distributor, 
//          request.body.genre)

//     peliculas.push(pelicula)
//     response.send("Pelicula creada")
// });

// app.put("/peliculas", function(request, response){

    

//     peliculas[request.body.id].title = request.body.title;
//     peliculas[request.body.id].releaseYear = request.body.releaseYear;
//     peliculas[request.body.id].actors = request.body.actors;
//     peliculas[request.body.id].nationality = request.body.nationality;
//     peliculas[request.body.id].director = request.body.director;
//     peliculas[request.body.id].writer = request.body.writer;
//     peliculas[request.body.id].language = request.body.language;
//     peliculas[request.body.id].plataform = request.body.plataform;
//     peliculas[request.body.id].isMCU = request.body.isMCU;
//     peliculas[request.body.id].mainCharacterName = request.body.mainCharacterName;
//     peliculas[request.body.id].producer = request.body.producer;
//     peliculas[request.body.id].distributor = request.body.distributor;
//     peliculas[request.body.id].genre = request.body.genre;

//     response.send(peliculas)


// });

// app.delete("/peliculas", function(request, response){

//     peliculas.splice(request.body.id,1);
//     response.send("Pelicula eliminada");

// });

// app.listen(2500);


