let arr1 = [1, "1M", true, [1, 2, 3, 4, 5], { owner: "Sico" }]
let arr2 = ["BUGAATI", "MACLEREN", "PAGANI"]
let arr3 = ["MONEY", "FAME", "RESPECT", "POWER"]
let arr4 = [1, 2, 3, 4, 5, 12, 1, 19, 3, 62, 1]
let arr5 = ["sico", "Porsche", "a", "B", "Z", "z"]

// console. log(arr[0])
// console. log(arr[1])
// console. log(arr[2])
// console. log(arr[3][0])
// console. log(arr[3][4])
// console. log(arr[4])

arr1.unshift("SICO")
arr1.unshift("SICO")
arr1.push("Montana")
arr1.push("Montana")
arr1.shift()
arr1.pop()

arr1[1] = "porsche"

arr1.splice(2, 1, "1B")

delete arr1[4]

let arr = arr1.concat(arr2).concat(arr3)

let cars = arr.slice(7, 10)

arr4.sort((a, b) => a - b)
arr5.sort((a, b) => a.localeCompare(b))
// arr4.sort()
// arr5.sort()

arr4.reverse()

// run site
console.log(arr)
console.log(arr.toString())
console.log(arr.join(" AND "))
console.log(arr.length)
console.log(arr4)
console.log(arr5)
console.log(cars)
// run site ending