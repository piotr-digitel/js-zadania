/*
1) Show a result of Josephus Problem for 7 soldiers.
Display in the console log below
        a. 1 Kills 2
        b. 3 Kills 4
        c. 5 Kills 6
        d. 7 Kills 1
        e. 3 Kills 5
        f. 7 Kills 3
        g. 7 Remains alive
*/


console.log('Josephus Problem for 7 soldiers');
let soldiers = [1, 2, 3, 4, 5, 6, 7];

let currentSoldier;  //A soldier with the gun
let nextSoldier;     //A soldier, who will be killed 

while (soldiers.length > 1) {       // loop until only 1 soldier is alive
    currentSoldier = soldiers[0];
    soldiers.push(soldiers[0]);     // move (add at the end) currentSoldier to the end of the circle - for 1. cycle: [1, 2, 3, 4, 5, 6, 7, 1]
    soldiers.shift();               // remove currentSoldier from the begining of the circle - for 1. cycle: [2, 3, 4, 5, 6, 7, 1]
    nextSoldier = soldiers[0];
    soldiers.shift();               // kill the nextSoldier - remove from the circle - for 1. cycle: [3, 4, 5, 6, 7, 1]
    console.log( currentSoldier + ' Kills ' + nextSoldier);  
    //end of the first cycle - circle is rotated - first element is moved at the end, second element is removed (killed) 
    //- now the first element of the circle is the third
}
console.log(soldiers[0] + ' Remains alive');
