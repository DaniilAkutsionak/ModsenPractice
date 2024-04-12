console.log("Четвёртое задание")

function sumOfSquares(arr) {
    return arr.map(x => x * x)
              .reduce((acc, val) => acc + val, 0);
  }
  
  const numbers = [1, 2, 3, 4];
  const result = sumOfSquares(numbers);
  console.log(result);
  
  console.log("_________________________"); 