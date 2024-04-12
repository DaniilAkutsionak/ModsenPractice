'use strict';

function countVowels(str) {
 const vowelsRegex = /[aeiouаеёиоуыэюя]/gi;
 const matched = str.match(vowelsRegex);
 return matched ? matched.length : 0;
}
console.log("Первое задание"); 
console.log(countVowels("Колбаса с соусом")); 
console.log(countVowels("Eggs with sause")); 
console.log("_________________________"); 