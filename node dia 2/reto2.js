var timeNow = Date.now();

// var timeActualizado = Date.now();

setInterval (function(){
    
  var timeNow2 = Date.now()

  

    console.log("Ha llegado el melonero! ")

    var diferencia = (timeNow2 - timeNow)

    console.log(diferencia)
    
     timeNow = Date.now();


}, 5000)



