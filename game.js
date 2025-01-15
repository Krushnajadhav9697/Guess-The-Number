let secretnumber = Math.trunc(Math.random()*20) +1;
let score = 15;
let highscore=0;


const displaymessage = function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
        // document.querySelector('.message').textContent = '⛔No Number!' ;
        displaymessage('⛔No Number!');
    }
    else if (guess=== secretnumber){
        document.querySelector('.Number').textContent=secretnumber;
        // document.querySelector('.message').textContent='Correct Number✔️🎉'
        displaymessage('Correct Number✔️🎉');
        
        document.querySelector('body').style.backgroundColor='#60b347';

        document.querySelector('.Number').style.width='30rem'

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess!==secretnumber){
        if(score>1){
            // document.querySelector('.message').textContent= guess > secretnumber ?  'Too High📈' :  'Too Low📉';
            displaymessage(guess > secretnumber ?  'Too High📈' :  'Too Low📉');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            // document.querySelector('.message').textContent='You lost the Game 👎,Try Again!';
            displaymessage('You lost the Game 👎,Try Again!');
            document.querySelector('.score').textContent=0;
        }
    }

    // else if(guess>secretnumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='Too High📈'
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent='You lost the Game 👎,Try Again!';
    //         document.querySelector('.score').textContent=0;
    //     }
        
    // }
    
    // else if(guess<secretnumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='Too Low📉'
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent='You lost the Game 👎,Try Again!';
    //         document.querySelector('.score').textContent=0;
    //     }
       
    // }
    
})

document.querySelector('.again').addEventListener('click',function(){
    score=15;
    secretnumber=Math.trunc(Math.random()*20) +1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.Number').style.width='15rem';
    document.querySelector('.score').textContent=score;
    // document.querySelector('.message').textContent='Start Guessing...';
    displaymessage('Start Guessing...');
    document.querySelector('.guess').value = ' ';
    document.querySelector('.Number').textContent='?';
   

})