console.log("Третье задание"); 

function sumFirstAndLastDigit(num) {
    const numStr = num.toString(); 
    const firstDigit = parseInt(numStr[0], 10); 
    const lastDigit = parseInt(numStr[numStr.length - 1], 10); 
    
    const sum = firstDigit + lastDigit; 
    console.log(sum); 
  }
  
  sumFirstAndLastDigit(1234); 
  
  console.log("_________________________"); 
  