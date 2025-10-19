// Make factroial 
// like 7 =
// 7*6*5*4*3*2*1
// for and reduce loops

// let a = Number(prompt("whats your number"));

// let output = []



// problem is that is make a string not an array due to { += }

// for (let b = a; b <= a && b >= 2; b--) {
//     output += b + "*"
// }

// output += 1

// console.log(output)




// This is a better aproach 

// for (let b = a;  b >= 1; b--) {
//     output.push(b)
    
// }
// let out2 = output.join("*")

// console.log(out2)

let b = [5]

let result = b.reduce( (acc, b) => acc * curr, 1)

console. log(result)