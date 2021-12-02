const cardSymbols = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // 0,1,2,3,4   ,12
const suitSymbols = ["♠", "♣", "♥", "♦"];  // 0, 13, 26, 39



const hand = ["0","1","40","13","12"];   // symbol+suit: for example: "2"+"♣" = 14 (1+ 13)
let valuesArray = [];
let suitsArray = [];

function checkHand(){
     let resultString = "";

     convertHand();
    //console.log(duplicateCards())
     switch(duplicateCards()){
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
          case "5":
               resultString = "5 of a Kind";
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
          suitsArray[i] = Math.floor(hand[i] / 13);     
     }
}

function isFlush(){
     for(let i = 0; i < 4; i ++){
          if(suitsArray[i] != suitsArray[i+1]){
               return false;
          }
     }
     return true;
}

function isStraight(){
     let lowest = getLowest();
     for(let i = 1; i < 5; i++){
          if(occurrencesOf(lowest + i) != 1){
               return false
          }     
     }
     return true;
}

function isAceStraight(){
     let lowest = 9;
     for(let i = 1; i < 4; i++){
          if(occurrencesOf(lowest + i) != 1){
               return false
          }     
     }
     return occurrencesOf(1) == 0;
}

function getLowest(){
     let min = 12;
     for(let i = 0; i < valuesArray.length; i++){
          min = Math.min(min, valuesArray[i]);     
     }
     return min;     
} 

function duplicateCards(){
     let occurrencesFound = []; 
     let result = "";
     for(let i = 0; i < valuesArray.length; i++){
          let occurrences = occurrencesOf(valuesArray[i]);
          if(occurrences > 1 && occurrencesFound.indexOf(valuesArray[i]) == -1){
               result += occurrences; 
               occurrencesFound.push(valuesArray[i]);    
          }
     }
     return result;
}

function occurrencesOf(n){
     let count = 0;
     let index = 0;   
     do{          
          index = valuesArray.indexOf(n, index) + 1;  
          if(index == 0){
               break;
          }
          else{
               count ++;
          }
     } while(index < valuesArray.length);
     return count;
}  

     checkHand();
      
