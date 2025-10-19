var a = 5;
a = 6;
var a = "var";

console.log(a)

let b = 5;
b = 6;
// let b =90; cant be redeclared

console.log(b)

{
    let b = "let";
    console.log(b)
}

const c = "do not change me ";
// c="i changed";
// cont c ="i change this ";


console.log(c)
var f
console.log(typeof f)

let x;
console.log(x)

// const q;
// console. log(q)

let person = {
    name: "Sico,Montana",
    age: 16,
    Money: "100 B",
    luck: true ,
    addiction:null,
}

 let Wealth = "Money";
 person.age = 18;
 delete person.luck;
 person["fighting skills"]="unbeatable"



console.log(person)
console.log(person.name)
console.log(person[Wealth])

// let Wealth = "Money";
// person.age = 18;
// delete person.luck;
// person["fighting skills"]="unbeatable" wrong
