
let winner;

const computer = 1;
const player = -1;

let currentUser;

let playingBoard = [
    [0, 0, 0, 0, 0, 0],  // column 0
    [0, 0, 0, 0, 0, 0],  // column 1
    [0, 0, 0, 0, 0, 0],  // column 2
    [0, 0, 0, 0, 0, 0],  // column 3
    [0, 0, 0, 0, 0, 0],  // column 4
    [0, 0, 0, 0, 0, 0],  // column 5
    [0, 0, 0, 0, 0, 0]  // column 6
//   ]; document.querySelector('.grid div');
];
const rows = 6;
const cols = 7;

const rematchButton = document.querySelector('button');
rematchButton.addEventListener('click', init);

const winnerEl = document.querySelector('#declareWinner');

const playerChoice = document.querySelectorAll('.player');
    playerChoice.forEach((choice, index) => {
        choice.addEventListener('click', function(){
            setPlayerChoice(index + 1)
        })
    });

const computerChoice = document.querySelectorAll('.computer');
    computerChoice.addEventListener('click', function(){
        setComputerChoice(cpuThink());
    });



init(); // This loads your game to starting state (start screen)
function init() {
    // controller function that sets the initial values of our Model
    // aka sets the initial values of the start game state
    scores = {
      player: 0,
      tie: "Draw",
      computer: 0
    };
  
    currentUser = {
      player: -1, 
      computer: 1
    };

    
    playingBoard = [
        [0, 0, 0, 0, 0, 0],  // column 0
        [0, 0, 0, 0, 0, 0],  // column 1
        [0, 0, 0, 0, 0, 0],  // column 2
        [0, 0, 0, 1, 0, 0],  // column 3
        [0, 0, 1, 0, 0, 0],  // column 4
        [0, 1, 0, 0, 0, 0],  // column 5
        [1, 1, 1, 1, 0, 0]  // column 6
      ];
  
    winner = null; // 'Player', 'Draw', or 'computer'
  
    // call the render function, to take the values of the state
    // and update the DOM visually representing the state
    render();
    
  };

function render(){
    
    
    };

 
function reMatch(){
   render(newBoard);

};

function setScore(){

};
    

function playConnectFour(){
    beginGame = true;
    currentUser.player[i] = setPlayerChoice();
   
    
    //controller function
    // it updates the state 
    
    
    
};


function setPlayerChoice(){
    for (let i = playingBoard.length - 1; i >= 0; i--) {
        const playerChoice = playingBoard[i];
     if (!playerChoice.classList.contains('taken')){
        playerChoice.classList.add('taken');
        playerChoice.classList.add('player');
        } else {
            alert(`Cannot move here`);
        }
      }
      
    };
setPlayerChoice();

function cpuThink(){
    num = Math.floor(Math.random() * 7)
        num += 1;
    
};

function setComputerChoice(){

};

//     if(users.player.winList === true){
//         console.log(`${users.player} wins!`)
//     } else if(users.computer.winList === true){
//         console.log(`${users.computer} wins!`)
//     } else {
//         console.log(`${scores.tie}`);
//     }
//  };
