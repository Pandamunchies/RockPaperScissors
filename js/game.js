let count=0;
let userScore=0;
let computerScore=0;
//do{
function getComputerPick(){
    let number=Math.floor(Math.random()*3+1);
    switch(number){
        case 1:
            console.log("Rock");
            break;
        case 2:
            console.log("Paper");
            break;
        case 3:
            console.log("scissor");
            break;
    }   
}

let computerPick= getComputerPick()
console.log(computerPick);
function getPick(){
    let pick="";
    while(pick!="Rock" && pick!="Paper" && pick!="Scissor"){
    pick=prompt("Please pick Rock, Paper or Scissor");
    }
    return pick;
}
let userPick=getPick()
console.log(userPick);
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
/*function playAgain(){
    let choice="";
    choice=prompt("Would you like to play again?");
    return choice;
}*/
//count++;
/*scoreBoard(userScore,computerScore,count)
function scoreBoard(user, computer,count){
    if(count<5){
        console.log("Your score is: "+user+
        +"\nComputer score is: "+computer+"\n"
        +(5-count)+"games left.");
    }
    else{
        if(user-computer>0){
            console.log("Your score is: "+user+
            "\nComputer score is: "+computer+
            "\nCongrats you have won the dual.");
        }
        else{
            console.log("Your score is: "+user+
            "\nComputer score is: "+computer+
            "\nI am sorry. You have lost this game of wits.");
        }
    }
}

}while(count<5);*/
