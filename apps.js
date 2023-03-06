
let winner;
let cellColummChoice;
let scores;
let board = document.querySelector('.grid div');
let button = document.querySelector('button');
    button.addEventListener('click', board);
const divCell = document.querySelectorAll('grid-cell div');
const 
let user;



newGameSet(); // This loads your game to starting state (start screen)
  function newGameSet() {
    // controller function that sets the initial values of our Model
    // aka sets the initial values of the start game state

    scores = {
      player: 0,
      tie: "No Winner",
      computer: 0
    };
  
    cellColummChoice = {
      player: 1, 
      computer: -1
    };

    board = 
    [   [0, 0, 0, 0, 0, 0],  // column 0
        [0, 0, 0, 0, 0, 0],  // column 1
        [0, 0, 0, 0, 0, 0],  // column 2
        [0, 0, 0, 0, 0, 0],  // column 3
        [0, 0, 0, 0, 0, 0],  // column 4
        [0, 0, 0, 0, 0, 0],  // column 5
        [0, 0, 0, 0, 0, 0],  // column 6
      ];
  
    winner = null; // 'Player1', 'No Winner', or 'computer'
  
    // call the render function, to take the values of the state
    // and update the DOM visually representing the state
    reMatch();
  }

  function usersMove(){
    for (let key in board){
    board[i].divCell.style.backgroundColor = backgroundColor;
    
    const backgroundColor = winner === key ? 'Red' : 'Blue';
    
        // visually representing who the winner is, by surrounding the 
        // element with a grey border
        resultEls[key].borderEl.style.borderColor = borderColor;
     }
    }; 


  function reMatch(){
   if(button.onclick || users.winnerDeclared){
    return newGameSet;
   }
  };
  reMatch();


  function playConnectFour(){
    //controller function
    // it updates the state 
    console.log('click happening')
    // updating our state
    // we are setting the results (choices of the player)
    // to either 'rock', 'paper', or 'scissors'
    results.player = usersMove();
    results.computer = usersMove();
    newGameSet.board[i] = board;

    for(let i = 0; i < board.length; i ++){
        div
    }

    // Try to figure the Win LOGIC, update the score, and the winner variable
    // use the results, in order to update the winner
    if(results.player === results.computer){
        winner = 'tie';
    } else if(results.computer === rpsLookup[results.player].beats){
        winner = 'player'
    } else {
        winner = 'computer'
    }
    // and then update the score in the approipate use

    scores[winner] += 1;

    // at the end after you update state you always call render
    // which takes the state variables (who won, score, img)
    // and updates the DOM
    
};
