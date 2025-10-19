function greetings(name) {
    console.log(" welcome MR " + name + " , porsche GT3 RS is ready standing on front door ")
}
greetings("Sico");
greetings("Montana");

function wealth(a, b) {
    console.log("Current Networth", (a + b), "B")
}
wealth(16, 14)

function Cwealth(a, b) {
    return a + b;
}

let Money = Cwealth(65, 5)
console.log(Money, "B")

// function sum(a, b) {
//     return a + b;
// }
// let result = sum(99, 1)
// dosn't work
