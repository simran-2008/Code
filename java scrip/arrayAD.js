let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//function

// arr.forEach(function(element)  {
//     console.log(element)
// });


//with =>

// arr.forEach((element, index, arr) => {
//     console.log(element)
//     console.log(index)
//     console.log(arr)

// });

let arr1 = arr.map((element, index, arr) => {
    return index,element;
  
})
console.log(arr1)

