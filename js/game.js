function getRandomInt() {
    return Math.floor(Math.random()*3+1);
}
let randomNumber = getRandomInt(); 
    console.log(randomNumber); 
let computerPick= convertPick(randomNumber)
function convertPick(number){
    if(number===1){
    return "rock";
    }
    else if(number===2){
    return "paper";
    }
    else if(randomNumber===3){
    return  "scissor";
    }
}
console.log(computerPick);