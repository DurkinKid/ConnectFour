let board = document.querySelector(".board") // selecting game-board HTML elements to use in the DOM 
let player = document.querySelector(".player") // as above ^^^
let rematch = document.querySelector(".restart") // as above ^^^
let restart = document.querySelector(".restart") // as above ^^^
let winner = document.querySelector(".winner"); // as above ^^^
let cell = 0; // state variable to tell which integer to begin counting from within array (square divs on board)
const winningArray = [ // const winning array[i] to tell computer when game has been won if the integered indicies are classed with either currentplayer
[0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
[34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
[21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
[13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
[0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
[40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
[3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
[6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
[41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
[14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
[6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
[21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
[5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
[40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
[11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
[5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
[26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
[36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
]; 
let currentPlayer = 1; // declaring current player variable to use in conjunction with player span.
document.addEventListener("DOMContentLoaded", init) // tells init function to run

function init(){ // initializing game board
createBoard(); // call creatboard function to set the field.
player.innerHTML = currentPlayer; // telling cpu player "1" goes first
winner.innerHTML = ""; // empty winning html element
rematch.addEventListener("click", reset) // adding click function to rematch html element
let squares = document.querySelectorAll(".board div") // 
Array.from(squares).forEach(square => { 
square.addEventListener("click", clickBox) // adding click function to listen for a "click" forEach of the squares created within game-baord
})
}


function createBoard(){ // called in the init function - 
for(let i = 0; i < 49; i++){ // looping through to create 49 spaces on game-board array.
//creating one extra row below to add class name of "taken" 
// to tell computer first the row above is free to place token
let div = document.createElement("div") 
div.setAttribute("data-id", i) // setting the created div tag elements id = the divs index number within its parents array (game-board)
div.className = "square"; 
if (i >= 42){ // setting class of bottom row of squares to "taken" signifying the plaer cannot place a piece there.
div.className = "taken" ;
} board.appendChild(div)
}}


function clickBox(){ // allowing "clicks" to happen on specific squares..
let squares = document.querySelectorAll(".board div"); // setting squares equal to the HTML <div> tags created above
let colNum = parseInt(this.dataset.id); // Identifying cell column number by passing the square div tags string oriented value and returning it as an integer.  aka
if (squares[colNum + 7].classList.contains("taken") && !squares[colNum].classList.contains("taken")){ // checking 7(int) columns to see if the squares 
// contain a class of "taken"(true/false)
if(currentPlayer === 1){  // if current player is 1 and the click has occured, swithcs to player 2 turn to listen for another click
currentPlayer = 2 
player.innerHTML = currentPlayer
this.className = "player-one taken" // appending "player-one" and "taken" classes to the square in colum to signify red occupies the space
 } else if (currentPlayer === 2){ 
currentPlayer = 1 
player.innerHTML = currentPlayer 
this.className = "player-two taken" 
} if (cell === 42){ 

} 
}else{
console.log("You cannot build on an empty space or on a space that has been built on");
} 
checkWon();
}

function checkWon(){ // check if board contains any winning arrays from state.
let squares = document.querySelectorAll(".board div") // initializing squares on baord to match agianst winning arrays in state
for (let i = 0; i < winningArray.length; i++){
let square = winningArray[i]
if(square.every(j => squares[j].classList.contains("player-one"))){ // checking every square element for class = "player-one",
currentPlayer.innerHTML = player; // if true, player 1(red) wins
winner.innerHTML = "Red Wins";
} else if (square.every(j => squares[j].classList.contains("player-two"))){ // checking for every square element for class = "player-two",
winner.innerHTML = "Blue Wins"; // if true, player-two(blue) wins
}
}}

function reset(){ // listener function for when click is heard on HTML rematch element
board.innerHTML = []; // clearing the boards array to new game status
winner.innerHTML = ""; // resetting winner html tag that pops up after game is won
player.innerHTML = currentPlayer; // sets current player to next player (losers move first next game)
init(); // calls init to reinitialize state
}



