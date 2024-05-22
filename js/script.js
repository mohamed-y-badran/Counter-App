document.getElementById("incr").addEventListener("click",inc)
document.getElementById("decr").addEventListener("click",dec)
document.getElementById("resetr").addEventListener("click",reset)

var count = document.getElementById("countr")
var countl = 0

function updatecounter (){
    count.textContent = countl
}

function inc (){
    countl++
    updatecounter()
}

function dec(){
    if  (countl > 0){
        --countl
        updatecounter()
    }  
}

function reset(){
    countl = 0
    updatecounter()
}








