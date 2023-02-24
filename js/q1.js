const array = []
// const square = {
//   sum = sum,
//   sum()
//     return sum +=i;
// },
// perfectSquare(){
//   return sum 
// }

function squareRoot(start, end){
  let sum = 1

  console.log(`Results for start number = ${start} and end number = ${end}`)

  for (let i = start; i <= end ; i++) {
      if (Number.isInteger(Math.sqrt(i))){
        array.push(i)
        sum += i
      }
  }
  console.log(`The perfect Squares are: ${array}`)
  console.log(`The sum of perfect squares is: ${sum}`)
}

let start = parseInt(prompt("Enter starting number"));
let end = parseInt(prompt("Enter end number? "));

if (isNaN(start) || isNaN(end)){
  console.log("Input is not a number")
} else if ((start < 1)) { 
  console.log("start not a positive number")
} else if ((end < 1)) { 
  console.log("end not a positive number")
}

squareRoot(start, end)
