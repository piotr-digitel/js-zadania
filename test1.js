console.log("Zjazd1 - Praca domowa");

// 1) From years in array check for leap years [1974, 1900, 1985, 2000]
// 2) Calculate factorial of 7.
// 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
// 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
// 5) Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].
// 6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
// 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
// 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]


// 1) LEAP
let years = [1974, 1900, 1985, 2000];
let year;
for (let i = 0; i < years.length; i++) {
   year = years[i];
   if ((year % 100 === 0 || year % 4 === 0) && year % 400 !== 0) {
        console.log("Lata przestępne: " + year);
   }
 }

// 2) FACTORIAL
let n = 7;
let summary = 1
while( n > 0 ){
    summary *= n--;
    //console.log(summary);
}
console.log("7 silnia = "+summary);

// 3) sum of the odd items
let valueArray = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum = 0;
for (let i = 0; i < valueArray.length; i++) {
    if(valueArray[i] % 2 == 0) sum = sum + valueArray[i];
}
console.log("Suma liczb parzystych to: " + sum);


// 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
let valueArray4 = [1,6,23,8,4,98,3,7,3,98,4,98];
let highval = valueArray[0];
let lowval = valueArray[0];
for (let i = 1; i < valueArray4.length; i++) {
    if(valueArray[i] > highval) highval = valueArray[i];
    if(valueArray[i] < lowval) lowval = valueArray[i];
}
console.log("Największa liczba to: " + highval);
console.log("Najmniejsza liczba to: " + lowval);