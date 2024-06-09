let count=0;
let userScore=0;
let computerScore=0;

function getComputerPick(){
    let number=Math.floor(Math.random()*3+1);
    //console.log(number);
    switch(number){
        case 1:
            computerPick= "Rock";
            break;
        case 2:
            computerPick= "Paper";
            break;
        case 3:
            computerPick="Scissor";
            break;
    }
     return computerPick   
}
function getPick(){
    let pick="Pick";
    while(pick.localeCompare("Rock", 'en', {sensitivity: 'base'})!=0
        && pick.localeCompare("Paper", 'en', {sensitivity: 'base'})!=0
        && pick.localeCompare("Scissor", 'en', {sensitivity: 'base'})!=0
    ){
        pick=prompt("Please pick Rock, Paper or Scissor");
    }
    pick=pick.toLowerCase();
    pick=pick.charAt(0).toUpperCase() + pick.slice(1);
    return pick;
}
function getWinner(computerPick, userPick){
    if(computerPick==="Rock" && userPick==="Scissor"){
        console.log("You lose! Rock breaks scissors!");
        computerScore++;
    }
    else if(computerPick==="Scissor" && userPick==="Rock"){
        console.log("You Win! Rock breaks scissors!");
        userScore++;
    }
    else if(computerPick==="Paper" && userPick==="Rock"){
        console.log("You lose! Paper covers Rock!");
        computerScore++;
    }
    else if(computerPick==="Rock" && userPick==="Paper"){
        console.log("You Win! Paper covers Rock!");
        userScore++;
    }
    else if(computerPick==="Scissor" && userPick==="Paper"){
        console.log("You lose! Scissor cuts Paper!");
        computerScore++;
    }
    else if(computerPick==="Paper" && userPick==="Scissor"){
        console.log("You Win! Scissor cuts Paper!");
        userScore++;
    }
    else{
        console.log("You tied. You both picked "+userPick+"." )
    }
}
function scoreBoard(user, computer,count){
    if(count<5){
        console.log("Your score is: "+user+
        "\nComputer score is: "+computer+"\n"
        +(5-count)+" games left.");
    }
    else{
        if(user-computer>0){
            console.log("Your score is: "+user+
            "\nComputer score is: "+computer+
            "\nCongrats! You have won the dual!");
        }
        else if(user-computer<0){
            console.log("Your score is: "+user+
            "\nComputer score is: "+computer+
            "\nI am sorry. You have lost this game of wits.");
        }
        else{
            console.log("Your score is: "+user+
            "\nComputer score is: "+computer+
            "\nYou have tied. Try again to settle the score.");    
        }
    }
}
function playRound(){
    let computerPick= getComputerPick()
    //console.log(computerPick);
    let userPick=getPick()
    //console.log(userPick);
    getWinner(computerPick, userPick)
    count++;
    scoreBoard(userScore,computerScore,count)
}

while(count<5){
    playRound()
}