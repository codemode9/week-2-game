$(document).ready(function() {

    let randomStartingNum=Math.floor(Math.random()*101+19);
    let first = Math.floor(Math.random()*11+1);
    let second = Math.floor(Math.random()*11+1);
    let third = Math.floor(Math.random()*11+1);
    let fourth = Math.floor(Math.random()*11+1);
    let userScore = 0;
    let wins = 0;
    let losses = 0;

    $('.cpuNum').text(randomStartingNum);
    $('.winDiv').text(wins);
    $('.lossDiv').text(losses);

    function reset() {
        randomStartingNum = Math.floor(Math.random()*101+19);
        $('.cpuNum').text(randomStartingNum);
        first = Math.floor(Math.random()*11+1);
        second = Math.floor(Math.random()*11+1);
        third = Math.floor(Math.random()*11+1);
        fourth = Math.floor(Math.random()*11+1);
        userScore= 0;
        $('.playerTotal').text(userScore);
    };

    function win() {
        alert("You won!");
        wins++;
        $('.winDiv').text(wins);
        reset();
    };
    function lose() {
        alert("You lose!");
        losses++;
        $('.lossDiv').text(losses);
        reset();
    };
    $('.one').on ('click', function(){
        userScore = userScore + first;
        console.log("New userScore= " + userScore);
        $('.playerTotal').text(userScore); 
            if (userScore == randomStartingNum){
              win();
            }
            else if ( userScore > randomStartingNum){
              lose();
            }   
      })  
      $('.two').on ('click', function(){
        userScore = userScore + second;
        console.log("New userScore= " + userScore);
        $('.playerTotal').text(userScore); 
            if (userScore == randomStartingNum){
              win();
            }
            else if ( userScore > randomStartingNum){
              lose();
            } 
      })  
      $('.three').on ('click', function(){
        userScore = userScore + third;
        console.log("New userScore= " + userScore);
        $('.playerTotal').text(userScore);
              if (userScore == randomStartingNum){
              win();
            }
            else if ( userScore > randomStartingNum){
              lose();
            } 
      })  
      $('.four').on ('click', function(){
        userScore = userScore + fourth;
        console.log("New userScore= " + userScore);
        $('.playerTotal').text(userScore); 
          
              if (userScore == randomStartingNum){
              win();
            }
            else if ( userScore > randomStartingNum){
              lose();
            }

})});