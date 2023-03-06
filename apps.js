// let gameField = new Array();
// let board = document.getElementById("game-table");
// let currentCol;
// let currentRow;
// let currentPlayer;
// let id = 1;

// newgame();

// function newgame(){
//   prepareField();
//   placeDisc(Math.floor(Math.random()*2)+1);
// }

// function checkForVictory(row,col){
//   if(getAdj(row,col,0,1)+getAdj(row,col,0,-1) > 2){
//     return true;
//   } else {
//     if(getAdj(row,col,1,0) > 2){
//       return true;
//     } else {
//       if(getAdj(row,col,-1,1)+getAdj(row,col,1,-1) > 2){
//         return true;
//       } else {
//         if(getAdj(row,col,1,1)+getAdj(row,col,-1,-1) > 2){
//           return true;
//         } else {
//           return false;
//         }
//       }
//     }
//   }
// }

// function getAdj(row,col,row_inc,col_inc){
//   if(cellVal(row,col) == cellVal(row+row_inc,col+col_inc)){
//     return 1+getAdj(row+row_inc,col+col_inc,row_inc,col_inc);
//   } else {
//     return 0;
//   }
// }

// function cellVal(row,col){
//   if(gameField[row] == undefined || gameField[row][col] == undefined){
//     return -1;
//   } else {
//     return gameField[row][col];
//   }
// }

// function firstFreeRow(col,player){
//   for(var i = 0; i<6; i++){
//     if(gameField[i][col]!=0){
//       break;
//     }
//   }
//   gameField[i-1][col] = player;
//   return i-1;
// }

// function possibleColumns(){
//   var moves_array = new Array();
//   for(var i=0; i<7; i++){
//     if(gameField[0][i] == 0){
//       moves_array.push(i);
//     }
//   }
//   return moves_array;
// }

// function think(){
//   var possibleMoves = possibleColumns();
//   var aiMoves = new Array();
//   var blocked;
//   var bestBlocked = 0;
  
//   for(var i=0; i<possibleMoves.length; i++){
//     for(var j=0; j<6; j++){
//       if(gameField[j][possibleMoves[i]] != 0){
//         break;
//       }
//     }
    
//     gameField[j-1][possibleMoves[i]] = 1;
//     blocked = getAdj(j-1,possibleMoves[i],0,1)+getAdj(j-1,possibleMoves[i],0,-1);
//     blocked = Math.max(blocked,getAdj(j-1,possibleMoves[i],1,0));
//     blocked = Math.max(blocked,getAdj(j-1,possibleMoves[i],-1,1));
//     blocked = Math.max(blocked,getAdj(j-1,possibleMoves[i],1,1)+getAdj(j-1, possibleMoves[i],-1,-1));
    
//     if(blocked >= bestBlocked){
//       if(blocked>bestBlocked){
//         bestBlocked = blocked;
//         aiMoves = new Array();
//       }
//       aiMoves.push(possibleMoves[i]);
//     }
//     gameField[j-1][possibleMoves[i]] = 0;
//   }
  
//   return aiMoves;
// }

// function Disc(player){
//   this.player = player;
//   this.color = player == 1 ? 'red' : 'yellow';
//   this.id = id.toString();
//   id++;
  
//   this.addToScene = function(){
//     board.innerHTML += '<div id="d'+this.id+'" class="disc '+this.color+'"></div>';
//     if(currentPlayer==2){
//       //computer move
//       var possibleMoves = think();
//       var cpuMove = Math.floor( Math.random() * possibleMoves.length);
//       currentCol = possibleMoves[cpuMove];
//       document.getElementById('d'+this.id).style.left = (14+60*currentCol)+"px";
//       dropDisc(this.id,currentPlayer);
//     }
//   }
  
//   var $this = this;
//   document.onmousemove = function(evt){
//     if(currentPlayer == 1){
//     currentCol = Math.floor((evt.clientX - board.offsetLeft)/60);
//     if(currentCol<0){currentCol=0;}
//     if(currentCol>6){currentCol=6;}
//     document.getElementById('d'+$this.id).style.left = (14+60*currentCol)+"px";
//     document.getElementById('d'+$this.id).style.top = "-55px";
//     }
//   }
//   document.onload = function(evt){
//     if(currentPlayer == 1){
//     currentCol = Math.floor((evt.clientX - board.offsetLeft)/60);
//     if(currentCol<0){currentCol=0;}
//     if(currentCol>6){currentCol=6;}
//     document.getElementById('d'+$this.id).style.left = (14+60*currentCol)+"px";
//     document.getElementById('d'+$this.id).style.top = "-55px";
//     }
//   }
  
//   document.onclick = function(evt){
//     if(currentPlayer == 1){
//       if(possibleColumns().indexOf(currentCol) != -1){
//         dropDisc($this.id,$this.player);
//       }
//     }
//   }
// }

// function dropDisc(cid,player){
//   currentRow = firstFreeRow(currentCol,player);
//   moveit(cid,(14+currentRow*60));
//   currentPlayer = player;
//   checkForMoveVictory();
// }

// function checkForMoveVictory(){
//   if(!checkForVictory(currentRow,currentCol)){
//     placeDisc(3-currentPlayer);
//   } else {
//     var ww = currentPlayer == 2 ? 'Computer' : 'Player';
//     placeDisc(3-currentPlayer);
//     alert(ww+" win!");
//     board.innerHTML = "";
//     newgame();
//   }
// }

// function placeDisc(player){
//   currentPlayer = player;
//   var disc = new Disc(player);
//   disc.addToScene();
// }

// function prepareField(){
//   gameField = new Array();
//   for(var i=0; i<6; i++){
//     gameField[i] = new Array();
//     for(var j=0; j<7; j++){
//       gameField[i].push(0);
//     }
//   }
// }

// function moveit(who,where){
//     document.getElementById('d'+who).style.top = where+'px';
// }
let winner;
let cellColummChoice;
let scores;
let board = document.querySelector('.grid div');
let button = document.querySelector('button');
    button.addEventListener('click', board);
const divCell = document.querySelectorAll('grid-cell div');
const UserScore = document.querySelector('#p-score')



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
