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
    let arrayTmp = [];                                        //temporary variable to remember output array
    let j = 0;                                                //indexes of output array
    for (let i = 0; i < arrayIn.length; i=i+2) {              //we jump every second index
        arrayTmp[j] = arrayIn[i]+arrayIn[i+1];                //counting elements of the output array
        j++;
    }
  return arrayTmp;
}

array = [1,3,4,1,0,3];
console.log("5) New array : " + NewArray(array));



//     6) For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
function NewArray2(arrayIn){
    let arrayTmp = [];                                        //temporary variable to remember output array
    let j = 0;                                                //indexes of output array
    let x = 0;
    if(arrayIn.length % 2) x = 1;                                          
    for (let i = 0; i < arrayIn.length-x; i=i+2) {            //we jump every second index
        arrayTmp[j] = arrayIn[i]+arrayIn[i+1];                //counting elements of the output array
        j++;
    }
    if(arrayIn.length % 2) arrayTmp[j] = 2 * arrayIn[arrayIn.length-1];
  return arrayTmp;
}

array = [1,3,4,1,0];
console.log("6) New array2 : " + NewArray2(array));


//     7) Create a function the return one random element from given array. // use random function 
function RndArray(arrayIn){
    let max = Math.floor(arrayIn.length-1);
    return arrayIn[Math.floor(Math.random() * (max + 1))];
}

array = [1,3,4,1,0,3];
console.log("7) Random element of array : " + RndArray(array));


//     8) Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
function RndArray2(arrayIn, attempt){
    let tmpArray = [];
    let max = arrayIn.length;
    for (let i = 0; i < attempt; i++) { 
        tmpArray[i] = arrayIn[Math.floor(Math.random() * (max-1))];
    }
    //console.log(tmpArray);
    return Math.min(...tmpArray); 
}

array = [1,3,4,1,0,3];
console.log("8) Lowest, random element of array : " + RndArray2(array, 10));


//     9) Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 











//     10) Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
function RndArray3(arrayIn){
    let resultOfCounting = arrayIn[0];
    for (let i = 1; i < arrayIn.length; i++) { 
        if(Math.floor(Math.random() * (2))){        //random from 0 to 1 - integer
            resultOfCounting+=arrayIn[i];
        }else{
            resultOfCounting-=arrayIn[i];
        }
    }
    return resultOfCounting; 
}

array = [1,3,4,1,0,3];
console.log("10) [a,b,c,d] =>(((a+-b)+-c)+-d) : " + RndArray3(array));



//     11) Create a function that will return the current day name in Polish. 
function DayOfWeekPL(){
    switch (new Date().getDay()) {
        case 0:
          day = "Niedziela";
          break;
        case 1:
          day = "Poniedziałek";
          break;
        case 2:
           day = "Wtorek";
          break;
        case 3:
          day = "Środa";
          break;
        case 4:
          day = "Czwartek";
          break;
        case 5:
          day = "Piątek";
          break;
        case 6:
          day = "Sobota";
      }
    return day; 
}

console.log("11) Current day name in Polish : " + DayOfWeekPL());


//     12) Create a function that tells us how many days till Friday 
function hmdtF(){
    let days = new Date().getDay();
    if(days==6) return days;
    days-=5;
    return Math.abs(days); 
}

console.log("12) How many days till Friday : " + hmdtF());



//     13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 
function ReturnObj(x,y){
    let obj = {
        sub: x-y,
        add: x+y,
        mul: x*y,
        div: x/y
      };
    return obj; 
}

console.log("13) Result on 4 basic arithmetic operations : " + JSON.stringify(ReturnObj(3,4)));
