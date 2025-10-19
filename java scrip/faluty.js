let r  = Math.random()
let a = prompt ("First  number")
let b = prompt ("operator")
let c = prompt ("Second number")



let wrong = {
    "+": "*",
    "-": "/",
    "*": "**",
    "/": "*",
}



if (r>0.9) {
    alert(`Answer is ${eval(`${a} ${b} ${c}`)}`)
}
else{
   b = wrong[b];
   alert(`Answer is ${eval(`${a} ${b} ${c}`)}`)
}
