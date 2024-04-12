console.log("Седьмое задание"); 

function checkDivision(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    throw new Error('Деление на ноль недопустимо.');
  }
  console.log('Результат деления: ' + (firstNumber / secondNumber));
}

try {
  checkDivision(10, 0);
} catch (error) {
  console.error(error.message);
}

try {
  checkDivision(10, 2);
} catch (error) {
  console.error(error.message);
}

  console.log("_________________________"); 
  