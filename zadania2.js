// ARRAY: [1,6,23,8,4,8,3,7]

//     1) Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
//     2) Create a function that returns sum of first and last elements of given array.
//     3) Create a function that takes a number and return factorial of that number.
//     4) Create a function that returns given array in reverse order. // no build in functions  
//     5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
//     6) For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
//     7) Create a function the return one random element from given array. // use random function 
//     8) Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
//     9) Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
//     10) Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
//     11) Create a function that will return the current day name in Polish. 
//     12) Create a function that tells us how many days till Friday 
//     13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 

let array= [1,6,23,8,4,8,3,7];

//     1) Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
function sumOfArray(tablica){
    let sum = 0;
    for (let i = 0; i < tablica.length; i++) sum += tablica[i];
    return sum;
}

console.log("1) Sum of aray is: " + sumOfArray(array));



//     2) Create a function that returns sum of first and last elements of given array.
function sumFitstLast(tablica){
    return tablica[0] + tablica[tablica.length-1];
}

console.log("2) Sum of first and last elements of given aray is: " + sumFitstLast(array));



//     3) Create a function that takes a number and return factorial of that number.
let liczbaDoSilni = 7;

function calcFactorial(n){
    let summary = 1
    while( n > 0 ){
        summary *= n--;
    }
    return summary;
}
console.log("3) Factorial of " + liczbaDoSilni + " is: " + calcFactorial(liczbaDoSilni));


//     4) Create a function that returns given array in reverse order. // no build in functions  
function RevOfArray(array1){
    let tmp;                                        //temporary variable to remember first values of array
    for (let i = 0; i < array1.length/2; i++) {     //we only sweep half the array
        tmp = array1[i];                            //remember the starting element of the array
        array1[i]=array1[array1.length-i-1];        //in the initial element we write the final one
        array1[array1.length-i-1]=tmp;              //in the final element we save the first remembered earlier
    }
}
RevOfArray(array);  //the function changes the values ​​in a given array because it is passed as a reference (array is a reference type)

console.log("4) Reverse order of aray : " + array);



//     5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
function NewArray(arrayIn){
  return [arrayIn[0] + arrayIn[1], arrayIn[2] + arrayIn[3], arrayIn[4] + arrayIn[5]];
}

array = [1,3,4,1,0,3];

//let newAR = NewArray(array);
//console.log("5) New aray : " + newAR);

console.log("5) New aray : " + NewArray(array));



//     6) For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

