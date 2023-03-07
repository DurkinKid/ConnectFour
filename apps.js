
let winner;
let choices;
let scores;
let beginGame = true;

let computer = document.querySelector('.computer');
let player = document.querySelector('.player');

let currentUser = 1;

const playingBoard = document.querySelector('.grid div');
playingBoard.addEventListener('click', function(){
    alert(`click`);
    return 
});

const rematchButton = document.querySelector('button');
rematchButton.addEventListener('click', function(){
    alert(`click`)
    return newBoard;
});

const choiceEls = document.querySelectorAll('.grid-cell div');

const scoreEls = {
    player: document.querySelector('#playerScore > h2'),
    computer: document.querySelector('#computerScore > h2')
};

newGameSet(); // This loads your game to starting state (start screen)
function newGameSet() {
    // controller function that sets the initial values of our Model
    // aka sets the initial values of the start game state
    scores = {
      player: 0,
      tie: "Draw",
      computer: 0
    };
  
    choices = {
      player: -1, 
      computer: +1
    };

    
    newBoard = [
        [0, 0, 0, 0, 0, 0],  // column 0
        [0, 0, 0, 0, 0, 0],  // column 1
        [0, 0, 0, 0, 0, 0],  // column 2
        [0, 0, 0, 0, 0, 0],  // column 3
        [0, 0, 0, 0, 0, 0],  // column 4
        [0, 0, 0, 0, 0, 0],  // column 5
        [0, 0, 0, 0, 0, 0]  // column 6
      ];
  
    winner = null; // 'Player1', 'No Winner', or 'computer'
  
    // call the render function, to take the values of the state
    // and update the DOM visually representing the state
    
    
  };

  function render(){
    for (let key in newBoard){
        console.log(key, " <- key");
        [key].choiceEls.classList.add('player');// scores['player']
        }
   
  };

 function reMatch(){
    if (rematchButton.onclick){
        return newGameSet;
    }
};
    
  
  


  function playConnectFour(){
    if(beginGame = true){
        
        currentUser.choice = setUserChoice();
        return;
    };
    //controller function
    // it updates the state 
    console.log('click happening')
    // updating our state
    // we are setting the results (choices of the player)
    // to either 'rock', 'paper', or 'scissors'
   

    // Try to figure the Win LOGIC, update the score, and the winner variable
    // use the results, in order to update the winner
    
    // and then update the score in the approipate use

    

    // at the end after you update state you always call render
    // which takes the state variables (who won, score, img)
    // and updates the DOM
    render();
};
playConnectFour();


function setUserChoice(){
    let playingBoard =  document.querySelector('.grid div');
    for (let i = playingBoard.length - 1; i >= 0; i--) {
        const choiceEls = board[i];
     if (!choiceEls.classList.contains('filled')){
        choiceEls.classList.add('taken');
        choiceEls.classList.add('player');
        } else {
            alert(`Cannot move here`);
        }
      }
      
    };
 
    setUserChoice();

//     if(users.player.winList === true){
//         console.log(`${users.player} wins!`)
//     } else if(users.computer.winList === true){
//         console.log(`${users.computer} wins!`)
//     } else {
//         console.log(`${scores.tie}`);
//     }
//  };
