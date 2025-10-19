let First = {
    A: "The",
    B: "Montana",
    C: "Sico"
}
let Second = {
    A: "Porsche",
    B: "Dev-ops",
    C: "Realworld"
}
let Third = {
    A: "Spoted",
    B: " In",
    C: "World"
}



let R1 = Math.random()
console.log(R1)

let start = {
    v: "",

}

if (R1 >= 0.6666666) {
    start.v = First["A"]

}
else if (R1 >= 0.3333333333) {
    start.v = First["B"]

}
else if (R1 >= 0) {
    start.v = First["C"]

}
else {
}


let R2 = Math.random()
console.log(R2)

let main = {
    v: "",
}

if (R1 >= 0.6666666) {
    main.v = Second["A"]

}
else if (R1 >= 0.3333333333) {
    main.v = Second["B"]

}
else if (R1 >= 0) {
    main.v = Second["C"]

}
else {
}


let R3 = Math.random()
console.log(R3)

let end = {
    v: "",
}

if (R3 >= 0.6666666) {
    end.v = Third["A"]

}
else if (R3 >= 0.3333333333) {
    end.v = Third["B"]

}
else if (R3 >= 0) {
    end.v = Third["C"]

}
else {
}

alert (`Bussiness Name ${start.v} ${main.v} ${end.v}`);



//fuck u
//fuck u
//fuck u
// Alt+Shitf+Down-Arrow
// Alt+Shitf+Down-Arrow
// Alt+Shitf+Down-Arrow




