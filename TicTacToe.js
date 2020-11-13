function putX(blockNumberInString){
    document.getElementById(blockNumberInString).innerHTML = "<i class='fa fa-times-circle makeXBigger'></i>";
    return "X";
}
function putO(blockNumberInString){
    document.getElementById(blockNumberInString).innerHTML = "<i class='fa fa-opera makeOBigger'></i>";
    return "O";
}

// gameOver
// input: mark
// return: nothing, just end the game by showing alert with winning player
// method:
//      isGameOver true banabo.
//      jodi mark x hoy:
//          player 1 jitse alert
//      else:
//          player 2 jitse alert
function gameOver(mark){
    isGameOver = true;
    if (mark == "X"){
        alert("Player 1 Won!");
    }
    else{
        alert("Player 2 Won!");
    }
}

// getBlockIndex
// input: blockNumberInString as string
// return: blockIndex as integer
// method:
//      return getBlockIndex(blockNumberInString)
function getBlockIndex(blockNumberInString){
    return blockMapping[blockNumberInString];
}

// validateZerothIndex
// input: blockNumberInString
// return: nothing
// method:
//      if blockMarks[0] == blockMarks[1] and blockMarks[1] == blockMarks[2]:
//          gameOver(mark)     
//      if blockMarks[0] == blockMarks[3] and blockMarks[3] == blockMarks[6]:
//          gameOver(mark)  
//      if blockMarks[0] == blockMarks[4] and blockMarks[4] == blockMarks[8]:
//          gameOver(mark) 
function validateZerothIndex(blockNumberInString, mark){
        if ((blockMarks[0] == blockMarks[1]) && (blockMarks[1] == blockMarks[2])){
            gameOver(mark);
        }
        else if ((blockMarks[0] == blockMarks[3]) && (blockMarks[3] == blockMarks[6])){
            gameOver(mark);
        }
        else if ((blockMarks[0] == blockMarks[4]) && (blockMarks[4] == blockMarks[8])){
            gameOver(mark);
        }
}

// validateFirstIndex
// input: blockNumberInString
// return: nothing
// method:
//      if blockMarks[0] == blockMarks[1] and blockMarks[1] == blockMarks[2]:
//          gameOver(mark)     
//      if blockMarks[0] == blockMarks[3] and blockMarks[3] == blockMarks[6]:
//          gameOver(mark)  
//      if blockMarks[0] == blockMarks[4] and blockMarks[4] == blockMarks[8]:
//          gameOver(mark) 
function validateFirstIndex(blockNumberInString, mark){
        if ((blockMarks[0] == blockMarks[1]) && (blockMarks[1] == blockMarks[2])){
            gameOver(mark);
        }
        else if ((blockMarks[1] == blockMarks[4]) && (blockMarks[4] == blockMarks[7])){
            gameOver(mark);
        }
}

// validateSecondIndex
// input: blockNumberInString
// return: nothing
// method:
//      if blockMarks[0] == blockMarks[1] and blockMarks[1] == blockMarks[2]:
//          gameOver(mark)     
//      if blockMarks[2] == blockMarks[4] and blockMarks[3] == blockMarks[6]:
//          gameOver(mark)  
//      if blockMarks[2] == blockMarks[5] and blockMarks[4] == blockMarks[8]:
//          gameOver(mark) 
function validateSecondIndex(blockNumberInString, mark){
        if ((blockMarks[0] == blockMarks[1]) && (blockMarks[1] == blockMarks[2])){
            gameOver(mark);
        }
        else if ((blockMarks[2] == blockMarks[4]) && (blockMarks[4] == blockMarks[6])){
            gameOver(mark);
        }
        else if ((blockMarks[2] == blockMarks[5]) && (blockMarks[5] == blockMarks[8])){
            gameOver(mark);
        }
}


// validateThirdIndex
// input: blockNumberInString
// return: nothing
// method:
//      if blockMarks[0] == blockMarks[1] and blockMarks[1] == blockMarks[2]:
//          gameOver(mark)     
//      if blockMarks[2] == blockMarks[4] and blockMarks[3] == blockMarks[6]:
//          gameOver(mark)  
//      if blockMarks[2] == blockMarks[5] and blockMarks[4] == blockMarks[8]:
//          gameOver(mark) 
function validateThirdIndex(blockNumberInString, mark){
        if ((blockMarks[0] == blockMarks[3]) && (blockMarks[3] == blockMarks[6])){
            gameOver(mark);
        }
        if ((blockMarks[3] == blockMarks[4]) && (blockMarks[4] == blockMarks[5])){
            gameOver(mark);
        }
}


// validateFourthIndex
// input: blockNumberInString
// return: nothing
// method:
//      if blockMarks[0] == blockMarks[1] and blockMarks[1] == blockMarks[2]:
//          gameOver(mark)     
//      if blockMarks[2] == blockMarks[4] and blockMarks[3] == blockMarks[6]:
//          gameOver(mark)  
//      if blockMarks[2] == blockMarks[5] and blockMarks[4] == blockMarks[8]:
//          gameOver(mark) 
function validateFourthIndex(blockNumberInString, mark){
        if ((blockMarks[1] == blockMarks[4]) && (blockMarks[4] == blockMarks[7])){
            gameOver(mark);
        }
        else if ((blockMarks[3] == blockMarks[4]) && (blockMarks[4] == blockMarks[5])){
            gameOver(mark);
        }
        else if ((blockMarks[0] == blockMarks[4]) && (blockMarks[4] == blockMarks[8])){
            gameOver(mark);
        }
        else if ((blockMarks[2] == blockMarks[4]) && (blockMarks[4] == blockMarks[6])){
            gameOver(mark);
        }
}


// validateFifthIndex
// input: blockNumberInString
// return: nothing
// method:
//      if blockMarks[0] == blockMarks[1] and blockMarks[1] == blockMarks[2]:
//          gameOver(mark)     
//      if blockMarks[2] == blockMarks[4] and blockMarks[3] == blockMarks[6]:
//          gameOver(mark)  
//      if blockMarks[2] == blockMarks[5] and blockMarks[4] == blockMarks[8]:
//          gameOver(mark) 
function validateFifthIndex(blockNumberInString, mark){
        if ((blockMarks[2] == blockMarks[5]) && (blockMarks[5] == blockMarks[8])){
            gameOver(mark);
        }
        if ((blockMarks[3] == blockMarks[4]) && (blockMarks[4] == blockMarks[5])){
            gameOver(mark);
        }
}

// validateSixthIndex
// input: blockNumberInString
// return: nothing
// method:
//      if blockMarks[0] == blockMarks[1] and blockMarks[1] == blockMarks[2]:
//          gameOver(mark)     
//      if blockMarks[2] == blockMarks[4] and blockMarks[3] == blockMarks[6]:
//          gameOver(mark)  
//      if blockMarks[2] == blockMarks[5] and blockMarks[4] == blockMarks[8]:
//          gameOver(mark) 
function validateSixthIndex(blockNumberInString, mark){
        if ((blockMarks[0] == blockMarks[3]) && (blockMarks[3] == blockMarks[6])){
            gameOver(mark);
        }
        if ((blockMarks[2] == blockMarks[4]) && (blockMarks[4] == blockMarks[6])){
            gameOver(mark);
        }
        if ((blockMarks[6] == blockMarks[7]) && (blockMarks[7] == blockMarks[8])){
            gameOver(mark);
        }
}

// validateSeventhIndex
// input: blockNumberInString
// return: nothing
// method:
//      if blockMarks[0] == blockMarks[1] and blockMarks[1] == blockMarks[2]:
//          gameOver(mark)     
//      if blockMarks[2] == blockMarks[4] and blockMarks[3] == blockMarks[6]:
//          gameOver(mark)  
//      if blockMarks[2] == blockMarks[5] and blockMarks[4] == blockMarks[8]:
//          gameOver(mark) 
function validateSeventhIndex(blockNumberInString, mark){
        if ((blockMarks[1] == blockMarks[4]) && (blockMarks[4] == blockMarks[7])){
            gameOver(mark);
        }
        if ((blockMarks[6] == blockMarks[7]) && (blockMarks[7] == blockMarks[8])){
            gameOver(mark);
        }
}


// validateEighthIndex
// input: blockNumberInString
// return: nothing
// method:
//      if blockMarks[0] == blockMarks[1] and blockMarks[1] == blockMarks[2]:
//          gameOver(mark)     
//      if blockMarks[2] == blockMarks[4] and blockMarks[3] == blockMarks[6]:
//          gameOver(mark)  
//      if blockMarks[2] == blockMarks[5] and blockMarks[4] == blockMarks[8]:
//          gameOver(mark) 
function validateEighthIndex(blockNumberInString, mark){
        if ((blockMarks[0] == blockMarks[4]) && (blockMarks[4] == blockMarks[8])){
            gameOver(mark);
        }
        if ((blockMarks[2] == blockMarks[5]) && (blockMarks[5] == blockMarks[8])){
            gameOver(mark);
        }
        if ((blockMarks[6] == blockMarks[7]) && (blockMarks[7] == blockMarks[8])){
            gameOver(mark);
        }
}


// checkIfPlayerWon 
// input: blockNumberInString, mark
// return: nothing, just validate korbo koto index call hoise sheita
// method:
//      1. jodi getblockindex(blocknumber) 0 hoy:
//          2. validatezerothindex(blocknumber, mark)
//      3. jodi getblockindex(blocknumber) 1 hoy:
//          4. validateFirstIndex(blocknumber, mark)
//      5. jodi getblockindex(blocknumber) 2 hoy:
//          6. validateSecondIndex(blocknumber, mark)
//      7. jodi getblockindex(blocknumber) 3 hoy:
//          8. validateThirdIndex(blocknumber, mark)
//      9. jodi getblockindex(blocknumber) 4 hoy:
//          10. validateFourthIndex(blocknumber, mark)
//      11. jodi getblockindex(blocknumber) 5 hoy:
//          12. validateFifthIndex(blocknumber, mark)
//      13. jodi getblockindex(blocknumber) 6 hoy:
//          14. validateSixthIndex(blocknumber, mark)
//      15. jodi getblockindex(blocknumber) 7 hoy:
//          16. validateSeventhIndex(blocknumber, mark)
//      17. jodi getblockindex(blocknumber) 8 hoy:
//          18. validateEighthIndex(blocknumber, mark)
function checkIfPlayerWon(blockNumberInString, mark){
    if (getBlockIndex(blockNumberInString) == 0){
        validateZerothIndex(blockNumberInString, mark);
    }
    else if(getBlockIndex(blockNumberInString) == 1){
        validateFirstIndex(blockNumberInString, mark);
    }
    else if(getBlockIndex(blockNumberInString) == 2){
        validateSecondIndex(blockNumberInString, mark);
    }
    else if(getBlockIndex(blockNumberInString) == 3){
        validateThirdIndex(blockNumberInString, mark);
    }
    else if(getBlockIndex(blockNumberInString) == 4){
        validateFourthIndex(blockNumberInString, mark);   
    }
    else if(getBlockIndex(blockNumberInString) == 5){
        validateFifthIndex(blockNumberInString, mark);
    }
    else if(getBlockIndex(blockNumberInString) == 6){
        validateSixthIndex(blockNumberInString, mark);
    }
    else if(getBlockIndex(blockNumberInString) == 7){
        validateSeventhIndex(blockNumberInString, mark);
    }
    else if(getBlockIndex(blockNumberInString) == 8){
        validateEighthIndex(blockNumberInString, mark);
    }

}

// performClickOperation
// 1. numberOfClicks++
// 2. areBlocksClicked[index] true hobe, karon block e click hoye gese
// 3. jodi number of clicks even hoy:
//      4. mark = putX(blocknumber)
// 5. othoba:
//      6. mark = putO(blocknumber)
// 7. blockMarks[index] e mark boshabo
// 8. checkifplayerwon(blocknumber, mark)
function performClickOperation(blockNumberInString){
    numberOfClicks += 1;
    areBlocksClicked[getBlockIndex(blockNumberInString)] = true;
    if (numberOfClicks % 2 != 0){
        var mark = putX(blockNumberInString);
    }
    else{
        var mark = putO(blockNumberInString);
    }
    blockMarks[getBlockIndex(blockNumberInString)] = mark;
    checkIfPlayerWon(blockNumberInString, mark);
    
}

// jekono block e click er somoye ekta global variable thakbe: numberOfClicks. shuru te eita 0.
// jokhon e click korbo, tokhon JS e onclick function call hobe: isClickValid().
// ei function e:
// 1. jodi areBlocksClicked[getBlockIndex(blockNumberInString)] true hoy:
//      2. return ""

function isClickValid(blockNumberInString){
    if(areBlocksClicked[getBlockIndex(blockNumberInString)] == true || isGameOver == true){
        return false;
    }
    performClickOperation(blockNumberInString);
}

// restart game with button click
function restartGame(){
    location.reload();
}


// numberOfClicks diye dekhbo koybar click kora hoise
var numberOfClicks = 0; 

// 1. ekta list thakbe, areBlocksClicked. boolean value thakbe 9 index e. shuru te sob false. 
var areBlocksClicked = [false, false, false, false, false, false, false, false, false];

// 2. ekta dict thakbe, blockMapping. key hobe blockNumberInString id, value hobe corresponding block number as integer.
var blockMapping = {"zerothBlock":0, "firstBlock":1, "secondBlock":2, "thirdBlock":3, "fourthBlock":4, "fifthBlock":5, "sixthBlock":6, "seventhBlock":7, "eighthBlock":8};

// variable isGameOver. player ra ar mark dite parbe kina sheita check korar jonno.
var isGameOver = false;

// blockMarks array. 1,2,3,..,9 value hobe. successsful click hoile oi index e "X" othoba "O" boshbe.
var blockMarks = [1,2,3,4,5,6,7,8,9];