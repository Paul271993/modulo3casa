
const http = require("http");

const server = http.createServer(function(request, response)
                    
{
                     console.log("Peticion recibida del cliente");
                     console.log(request.url);
                     console.log(request.method);
                     console.log("content-type: " + request.headers["content-type"])
                     console.log(request.headers["content-length"])
                     console.log(request.headers["user-agent"])
                     

                     if (request.url === "/"){

                    response.writeHead(200,{"Content-Type": "application/json"});

                    response.write(JSON.stringify({ok:true,message: 'Recibido!'}))

                    response.end();

           }

           else if (request.url === "/bye"){

            response.writeHead(200,{"Content-Type": "application/json"});

            response.write(JSON.stringify({ok:true,message: 'Adios!'}))

            response.end();
        }

});

server.listen(1000);
