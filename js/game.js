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