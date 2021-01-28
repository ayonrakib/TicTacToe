function putX(){
    return '<i class="fa fa-times-circle makeXBigger"></i>';
}

function putO(){
    return '<i class="fa fa-circle makeOBigger"></i>';
}

function gameOver(){
    isGameOver = true;
}

function firstPlayerWon(){
    gameOver();
    alert("First Player Won!");
}

function secondPlayerWon(){
    gameOver();
    alert("Second Player Won!");
}
// checkIfGameOver
// input: mark, blocknumber
// return: nothing, just check if game over or not
// method:
//      step1. jodi blocknumber == 0block:
//          step1. jodi 0block == 1block == 2block er mark soman: 
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step2. jodi 0thblock == 3rdblock == 6thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step3. jodi 0thblock == 5rdblock == 9thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//      step2. jodi blocknumber == 1block:
//          step1. jodi 1block == 4block == 7block er mark soman: 
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step2. jodi 0thblock == 1rdblock == 2thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//      step3. jodi blocknumber == 2block:
//          step1. jodi 0block == 1block == 2block er mark soman: 
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step2. jodi 2thblock == 5rdblock == 8thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step3. jodi 2thblock == 4rdblock == 6thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//      step4. jodi blocknumber == 3block:
//          step1. jodi 0block == 3block == 6block er mark soman: 
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step2. jodi 3thblock == 4rdblock == 5thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//      step5. jodi blocknumber == 4block:
//          step1. jodi 0block == 4block == 7block er mark soman: 
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step2. jodi 1thblock == 4rdblock == 7thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step3. jodi 2thblock == 4rdblock ==6thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step4. jodi 3thblock == 4rdblock ==5thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//      step6. jodi blocknumber == 5block:
//          step1. jodi 2block == 5block == 8block er mark soman: 
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step2. jodi 3thblock == 4rdblock == 5thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step3. jodi 0thblock == 5rdblock == 9thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//      step7. jodi blocknumber == 6block:
//          step1. jodi 0block == 3block == 6block er mark soman: 
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step2. jodi 2thblock == 4rdblock == 6thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step3. jodi 6thblock == 7rdblock == 8thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//      step8. jodi blocknumber == 7block:
//          step1. jodi 1block == 4block == 7block er mark soman: 
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step2. jodi 5thblock == 6rdblock == 7thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//      step9. jodi blocknumber == 8block:
//          step1. jodi 0block == 4block == 8block er mark soman: 
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step2. jodi 2thblock == 5rdblock == 8thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon
//          step3. jodi 6thblock == 7rdblock == 8thblock mark:
//              step1. jodi mark X hoy:
//                  step1. 1stplayerwon()
//              step2. othoba joid mark O hoy:
//                  step1. 2ndplayerwon

function checkifGameOver(mark, blockNumber){
    if (blockNumber == "zerothBlock"){
        if (blockToMarks['zerothBlock'] == blockToMarks['firstBlock'] &&  blockToMarks['firstBlock'] == blockToMarks['secondBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['zerothBlock'] == blockToMarks['thirdBlock'] &&  blockToMarks['thirdBlock'] == blockToMarks['sixthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['zerothBlock'] == blockToMarks['fourthBlock'] &&  blockToMarks['fourthBlock'] == blockToMarks['eighthBlock']){
            if (mark == "X"){

                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
    }
    else if (blockNumber == "firstBlock"){
        if (blockToMarks['firstBlock'] == blockToMarks['fourthBlock'] &&  blockToMarks['fourthBlock'] == blockToMarks['seventhBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['zerothBlock'] == blockToMarks['firstBlock'] &&  blockToMarks['firstBlock'] == blockToMarks['secondBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
    }
    else if (blockNumber == "secondBlock"){
        if (blockToMarks['zerothBlock'] == blockToMarks['firstBlock'] &&  blockToMarks['firstBlock'] == blockToMarks['secondBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['secondBlock'] == blockToMarks['fourthBlock'] &&  blockToMarks['fourthBlock'] == blockToMarks['sixthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['secondBlock'] == blockToMarks['fifthBlock'] &&  blockToMarks['fifthBlock'] == blockToMarks['eighthBlock']){
            if (mark == "X"){

                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
    }
    else if (blockNumber == "thirdBlock"){
        if (blockToMarks['zerothBlock'] == blockToMarks['thirdBlock'] && blockToMarks['thirdBlock'] == blockToMarks['sixthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['thirdBlock'] == blockToMarks['fourthBlock'] && blockToMarks['fourthBlock'] == blockToMarks['fifthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
    }
    else if (blockNumber == "fourthBlock"){
        if (blockToMarks['firstBlock'] == blockToMarks['fourthBlock'] &&  blockToMarks['fourthBlock'] == blockToMarks['seventhBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['thirdBlock'] == blockToMarks['fourthBlock'] &&  blockToMarks['fourthBlock'] == blockToMarks['fifthBlock']){
            alert("Came to the 3 4 5 line!")
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['zerothBlock'] == blockToMarks['fourthBlock'] &&  blockToMarks['fourthBlock'] == blockToMarks['eighthBlock']){
            if (mark == "X"){

                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['secondBlock'] == blockToMarks['fourthBlock'] &&  blockToMarks['fourthBlock'] == blockToMarks['sixthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
    }
    else if (blockNumber == "fifthBlock"){
        if (blockToMarks['secondBlock'] == blockToMarks['fifthBlock'] && blockToMarks['fifthBlock'] == blockToMarks['eighthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['thirdBlock'] == blockToMarks['fourthBlock'] && blockToMarks['fourthBlock'] == blockToMarks['fifthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
    }
    else if (blockNumber == "sixthBlock"){
        if (blockToMarks['zerothBlock'] == blockToMarks['thirdBlock'] &&  blockToMarks['thirdBlock'] == blockToMarks['sixthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['secondBlock'] == blockToMarks['fourthBlock'] &&  blockToMarks['fourthBlock'] == blockToMarks['sixthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['sixthBlock'] == blockToMarks['seventhBlock'] &&  blockToMarks['seventhBlock'] == blockToMarks['eighthBlock']){
            if (mark == "X"){

                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
    }
    else if (blockNumber == "seventhBlock"){
        if (blockToMarks['firstBlock'] == blockToMarks['fourthBlock'] && blockToMarks['fourthBlock'] == blockToMarks['seventhBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['sixthBlock'] == blockToMarks['seventhBlock'] && blockToMarks['seventhBlock'] == blockToMarks['eighthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
    }
    else if (blockNumber == "eighthBlock"){
        if (blockToMarks['zerothBlock'] == blockToMarks['fourthBlock'] &&  blockToMarks['fourthBlock'] == blockToMarks['eighthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['secondBlock'] == blockToMarks['fifthBlock'] &&  blockToMarks['fifthBlock'] == blockToMarks['eighthBlock']){
            if (mark == "X"){
                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
        else if (blockToMarks['sixthBlock'] == blockToMarks['seventhBlock'] &&  blockToMarks['seventhBlock'] == blockToMarks['eighthBlock']){
            if (mark == "X"){

                isGameOver = true;
                alert("First Player won!");
            }
            else if(mark == "O"){
                isGameOver = true;
                alert("Second Player won!")
            }
        }
    }
}

// putMark
// input: blockNumber in int
// return: nothing
// methodd:
//      step1. jodi blockNumber er innerhtml O/X mark na hoy and gameOver na hoy:
//          step1. jodi clickNumber even hoy:
//              step1. blockNumber er innerhtml e O mark dibo
//              step2. blockToMarks er blockNumber key te O mark boshabo
//              step3. check korbo game over kina with O mark and blockNumber
//      step2. othoba:
//              step1. blockNumber er innerhtml e X mark dibo
//              step2. blockToMarks er blockNumber key te X mark boshabo
//              step3. check korbo game over kina with X mark and blockNumber
function putMark(blockNumber){
    if(document.getElementById(blockNumber).innerHTML != putO() && document.getElementById(blockNumber).innerHTML != putX() && !isGameOver){
        if(clickNumber%2 == 0){
            document.getElementById(blockNumber).innerHTML = putO();
            blockToMarks[blockNumber] = putO();
            checkifGameOver("O",blockNumber);
        }
        else{
            document.getElementById(blockNumber).innerHTML = putX();
            blockToMarks[blockNumber] = putX();
            checkifGameOver("X",blockNumber);
        }
    }
}

$(document).ready(function(){
    $("#zerothBlock, #firstBlock, #secondBlock, #thirdBlock, #fourthBlock, #fifthBlock, #sixthBlock, #seventhBlock, #eighthBlock").click(function(){
        clickNumber++;
        putMark(`${$(this).attr('id')}`);

    });
})

function reloadPage(){
    location.reload();
}

// click number diye X naki O sheita define korbo
var clickNumber = 0;

// blockToMarks dict e key hobe block number, value hobe X naki O sheita. initially empty string
var blockToMarks = {"zerothBlock" : "",
                     "firstBlock" : "",
                     "secondBlock" : "",
                     "thirdBlock" : "",
                     "fourthBlock" : "",
                     "fifthBlock" : "",
                     "sixthBlock" : "",
                     "seventhBlock" : "",
                     "eighthBlock" : ""
                };
var iconToMarkMapping = {'<i class="fa fa-circle makeOBigger"></i>':"O",
                         '<i class="fa fa-circle makeXBigger"></i>':"X"};

// isGameOver diye check korbe game over ki over na. jodi true hoy, ar kauke mark dite dibe na
var isGameOver = false;