//Zadanie 3 - Sudoku solver

let sudoku =  [7,0,4,8,0,0,3,0,1,
               8,2,0,5,0,0,0,4,0,
               0,0,9,4,3,0,5,0,0,
               3,1,0,0,0,0,8,0,7,
               0,8,0,0,0,0,0,1,0,
               9,0,7,0,0,0,0,3,2,
               0,0,6,0,1,5,4,0,0,
               0,7,0,0,0,9,0,6,5,
               5,0,8,0,0,2,1,0,3];


let steps=0;     //how many steps is needed to solve sudoku

solve(sudoku);   // main function to solving given sudoku

// returns the row of the cell
function returnRow(cell) {        
    return Math.floor(cell / 9);
}

// returns the column of the cell
function returnCol(cell) {        
    return cell % 9;
}

// returns 3x3 block of the cell
function returnBlock(cell) {
    return Math.floor(returnRow(cell) / 3) * 3 + Math.floor(returnCol(cell) / 3);
}

// give a number, a row and a sudoku, returns true, if the number can be placed in the row
function isPossibleRow(number, row, sudoku) {
    for (let i=0; i<=8; i++) {
        if (sudoku[row*9+i] == number) {
            return false;
        }
    }
    return true;
}

// give a number, a column and a sudoku, returns true if the number can be placed in the column
function isPossibleCol(number, col, sudoku) {
    for (let i=0; i<=8; i++) {
        if (sudoku[col+9*i] == number) {
            return false;
        }
    }
    return true;
}

// give a number, a 3x3 block and a sudoku, returns true if the number can be placed in the block
function isPossibleBlock(number, block, sudoku) {
    for (let i=0; i<=8; i++) {
        if (sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)] == number) {
            return false;
        }
    }
    return true;
}

// give a cell, a number and a sudoku, returns true if the number can be placed in the cell
function isPossibleNumber(cell, number, sudoku) {
    let row = returnRow(cell);
    let col = returnCol(cell);
    let block = returnBlock(cell);
    return isPossibleRow(number,row,sudoku) && isPossibleCol(number,col,sudoku) && isPossibleBlock(number,block,sudoku);
}

// give a row and a sudoku, returns true if it's a right row
function isCorrectRow(row, sudoku) {
    let rightSequence = [1,2,3,4,5,6,7,8,9];  //to compare - row have all 1-9 numbers
    let rowTemp = [];
    for (let i=0; i<=8; i++) {
        rowTemp[i] = sudoku[row*9+i]; //read all cells from the row and store in temp array
    }
    rowTemp.sort();  //sort temp array to compare with simple change to text
    return JSON.stringify(rowTemp)==JSON.stringify(rightSequence);  //if both array are the same 123456789 - then true
}

// give a column and a sudoku, returns true if column has all 1-9 numbers
function isCorrectCol(col, sudoku) {
    let rightSequence = [1,2,3,4,5,6,7,8,9];  //to compare - column have all 1-9 numbers
    let colTemp = [];
    for (let i=0; i<=8; i++) {
        colTemp[i] = sudoku[col + i*9];
    }
    colTemp.sort();
    return JSON.stringify(colTemp)==JSON.stringify(rightSequence);  //change to text and compare strings
}

// given a 3x3 block and a sudoku, returns true if it's a correct block - has all numbers 1-9 
function isCorrectBlock(block, sudoku) {
    let rightSequence = [1,2,3,4,5,6,7,8,9];
    let blockTemp = [];
    for (let i=0; i<=8; i++) {
        blockTemp[i] = sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)];
    }
    blockTemp.sort();
    return JSON.stringify(blockTemp)==JSON.stringify(rightSequence);
}

// give a sudoku, returns true if the sudoku is solved - check all blocks, rows and columns are correct - they must have all 1 to 9 numbers
function isSolvedSudoku(sudoku) {
    for (let i=0; i<=8; i++) {
        if (!isCorrectBlock(i,sudoku) || !isCorrectRow(i,sudoku) || !isCorrectCol(i,sudoku)) {
            return false;
        }
    }
    return true;
}

// give a cell and a sudoku, returns an array with all possible values we can write in the cell
function determinePossibleValues(cell, sudoku) {
    let possible = [];
    for (let i=1; i<=9; i++) {
        if (isPossibleNumber(cell, i, sudoku)) {
        possible.unshift(i);
        }
    }
    return possible;
}

// give an array of possible values assignable to a cell, returns a random value picked from the array
function determineRandomPossibleValue(possible, cell) {
    let rndChose = Math.floor(Math.random() * possible[cell].length);
    return possible[cell][rndChose];
}

// give a sudoku, returns a two dimension array with all possible values 
function scanSudokuForUnique(sudoku) {
    let possible = [];
    for (let i=0; i<=80; i++) {
        if (sudoku[i] == 0) {
            possible[i] = [];
            possible[i] = determinePossibleValues(i, sudoku);
            if (possible[i].length==0) {
                return false;
            }
        }
    }
    return possible;
}

// give an array and a number, removes the number from the array
function removeAttempt(attemptArray, number) {
    let newArray =[];
    for (let i=0; i<attemptArray.length; i++) {
        if (attemptArray[i] != number) {
            newArray.unshift(attemptArray[i]);
        }
    }
    return newArray;
}

// give a two dimension array of possible values, returns the index of a cell where there are the less possible numbers to choose from
function nextRandom(possible) {
    let max = 9;
    let minChoices = 0;
    for (let i=0; i<=80; i++) {
        if (possible[i]!=undefined) {
            if ((possible[i].length<=max) && (possible[i].length>0)) {
                max = possible[i].length;
                minChoices = i;
            }
        }
    }
    return minChoices;
}



//solves sudoku
function solve(sudoku) {
    let saved = [];
    let savedSudoku = [];
    let nextMove;
    let whatToTry;
    let attempt;
    while (!isSolvedSudoku(sudoku)) {
        steps++;
        nextMove = scanSudokuForUnique(sudoku);
        if (nextMove == false) {
            nextMove = saved.pop();
            sudoku = savedSudoku.pop();
        }
        whatToTry = nextRandom(nextMove);
        attempt = determineRandomPossibleValue(nextMove,whatToTry);
        if (nextMove[whatToTry].length>1) {
            nextMove[whatToTry] = removeAttempt(nextMove[whatToTry],attempt);
            saved.push(nextMove.slice());
            savedSudoku.push(sudoku.slice());
        }
    sudoku[whatToTry] = attempt;
    }
    showSudoku(sudoku, steps);
}


// given a solved sudoku and the number of steps, prints out the sudoku
function showSudoku(sudoku, steps) {
    let sudokuText = "";
    let solved = "\n\nSolved in " + steps + " steps.";
    for (let i=0; i<=8; i++) {
        for (let j=0; j<=8; j++) {
            sudokuText+=" ";
            sudokuText+=sudoku[i*9+j];
            sudokuText+=" ";
            if (j!=8) {
                sudokuText+="|";
            }
        }
        if (i!=8) {
            sudokuText+="\n---+---+---+---+---+---+---+---+---\n";
        }
    }
    sudokuText+=solved;
    console.log(sudokuText);
}