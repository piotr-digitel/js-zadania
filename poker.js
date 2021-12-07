const cardSymbols = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // 0,1,2,3,4   ,12
const suitSymbols = ["♠", "♣", "♥", "♦"];  // 0, 13, 26, 39



const hand = ["9","9","9","9","11"];   // symbol+suit: for example: "2"+"♣" = 14 (1+ 13)
let valuesArray = [];
let colorArray = [];

function checkHand(){
     let resultString = "";

     convertHand();

     switch(areDuplicateCards()){
          case "2":
               resultString = "1 Pair";
               break;
           case "22":
               resultString = "2 Pairs";
               break;
          case "3":
               resultString = "3 of a Kind";
               break;
          case "23":
          case "32":
               resultString = "Full House";
               break;
          case "4":
               resultString = "4 of a Kind";
               break;
          default:
               if(isStraight()){
                    resultString = "Straight";     
               }
               if(isAceStraight()){
                    resultString = "Ace Straight";
               }
               break;
     }
     if(isFlush()){
          if(resultString){
               resultString += " and Flush";     
          }
          else{
               resultString = "Flush";
          }
     }
     if(!resultString){
          resultString = "nothing...";
     }
     console.log('You have: ' + resultString);
}  

function convertHand(){
     for(let i = 0; i < 5; i ++){
          valuesArray[i] = hand[i] % 13;
          colorArray[i] = Math.floor(hand[i] / 13);     
     }
     console.log(valuesArray);
     console.log(colorArray);
}

function isFlush(){                                                     //five cards all of the same suit, not all of sequential rank
     let sum = colorArray.reduce(function (a, b) {return a + b;}, 0);   //sum of array element
     if(sum == 0 || sum == 5 || sum == 10 || sum == 15) return true;
     return false;
}

function isStraight(){                          //A straight is a hand that contains five cards of sequential rank
     let isS = 0;
     let lowest = Math.min(...valuesArray);     //finds lowest card in array 
     for(let i = lowest; i < lowest + 5; i++){  //check if array includes five cards of sequential rank
          if(valuesArray.includes(i)) isS++ ;
     }
     if(isS == 5 && lowest != 0) return true;
     return false;
}

function isAceStraight(){   //check if array includes A, 10, J, Q, K
     let isAS = 0;
     if (valuesArray.includes(0)) isAS = 1;
     for(let i = 9; i < 13; i++){
       if (valuesArray.includes(i)) isAS++ ;   
     }
     if(isAS == 5) return true;
     return false;
}

function areDuplicateCards(){
     let countsOfDuplicates = '';
     let duplicatesMap = {};
     duplicatesMap = valuesArray.reduce(function(prev, cur) {
          prev[cur] = (prev[cur] || 0) + 1;
          return prev;
     }, {});

     for(let i = 0; i < Object.keys(duplicatesMap).length; i++){
          if (Object.values(duplicatesMap)[i] > 1) countsOfDuplicates+= Object.values(duplicatesMap)[i];
     }
     return countsOfDuplicates;
}

     checkHand();
      
