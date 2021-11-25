//5) Scale riddle. With 8 balls  EXAM [1,2,1,1,1,1,1,1]. One of the items will be change to two. 
//   Indexes are to be chosen at random. Use comparing of weights only two times.


let balls = [1,1,1,1,1,1,1,1];
balls[Math.floor(Math.random() * 8)] = 2; //One of the items will be change to two at random index.

console.log("The balls array: " + balls);

let ballsRandom = [0,1,2,3,4,5,6,7];  //array to randomize indexes - Indexes are to be chosen at random (0-7).
// Randomize array in-place using Durstenfeld shuffle algorithm 
function shuffleArray(ballsRandom) {
    for (let i = ballsRandom.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ballsRandom[i], ballsRandom[j]] = [ballsRandom[j], ballsRandom[i]];
    }
}

shuffleArray(ballsRandom);
console.log("The array of random indexes: " + ballsRandom);

function compareOfWeights(a, b){
    if (a>b) return 0;       //(2,1,1)
    else if (a<b) return 1;  //(1,2,1) 
    return (2); //a=b - means "2" is on third position (1,1,2)
}

//compare first interval and second interval
const x = compareOfWeights(balls[ballsRandom[0]] + balls[ballsRandom[1]] + balls[ballsRandom[2]], balls[ballsRandom[3]] + balls[ballsRandom[4]] + balls[ballsRandom[5]]);  //determine which interval contains the ball "2" - 0 first, 1 second, 2 third

//compare first and second position in chosen interval x
const y = compareOfWeights(balls[ballsRandom[x * 3]] , balls[ballsRandom[x * 3 + 1]]); // where is the ball "2" in interval - 0 first position, 1 second, 2 third position

console.log("Ball '2' is on index: " + ballsRandom[x * 3 + y]);          //counting index - nr of interval + position in interval