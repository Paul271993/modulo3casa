function a(){

    console.log("hola desde a")

}
a()




function b(){

    console.log("hola desde b")
}
b()




function main(funcion){

    console.log("hola desde main")

    funcion()
    
}

main(a)



function cuadrado(x){
    
    return x*x;
}

// console.log(cuadrado(5))


function random(numero){
       
    

    return Math.floor(Math.random() * numero);


}

// console.log(random(10))



function compose(a,b){
      

    result = (x) => {
        return a(b(x));
    }
    return result;
    
}
console.log(compose(random,cuadrado)(30));



