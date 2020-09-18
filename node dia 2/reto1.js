setTimeout(function() {
    console.log("after 1 second")

    

    setImmediate(function() {

        console.log("last process after finish the loop")

        process.nextTick(function(){

            console.log("initial loop event")
            
        })

    })

}, 1000)



