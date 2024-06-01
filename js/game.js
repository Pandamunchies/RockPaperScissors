function getRandomInt() {
    return Math.floor(Math.random()*3+1);
}
let randomNumber = getRandomInt(); 
    console.log(randomNumber); 
let computerPick= convertPick(randomNumber)
function convertPick(number){
    if(number===1){
    return "Rock";
    }
    else if(number===2){
    return "Paper";
    }
    else if(randomNumber===3){
    return  "Scissor";
    }
}
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
}
else if(computerPick==="Scissors" && userPick==="Rock"){
    console.log("You Win! Rock breaks scissors!");
}
else if(computerPick==="Paper" && userPick==="Rock"){
    console.log("You lose! Paper covers Rock!");
}
else if(computerPick==="Rock" && userPick==="Paper"){
    console.log("You Win! Paper covers Rock!");
}
else if(computerPick==="Scissor" && userPick==="Paper"){
    console.log("You lose! Scissor cuts Paper!");
}
else if(computerPick==="Paper" && userPick==="Scissor"){
    console.log("You Win! Scissor cuts Paper!");
}
else{
    console.log("You tied. You both picked "+userPick+"." )
}
