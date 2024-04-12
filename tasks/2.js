'use strict';

console.log("Второе задание"); 

try {
  console.log(beforeVar);
} catch (error) {
  console.log(error.message);
}
var beforeVar = "I'm defined with var!";

try {
  console.log(beforeLet);
} catch (error) {
  console.log(error.message);
}
let beforeLet = "I'm defined with let!";

try {
  console.log(beforeConst);
} catch (error) {
  console.log(error.message);
}
const beforeConst = "I'm defined with const!";

console.log("_________________________"); 
