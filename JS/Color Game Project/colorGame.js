var cont = document.querySelector("#container");//container holding squares
var squares = document.querySelectorAll(".square");//all individual squares
var header = document.querySelector("#header");//header section
var message = document.querySelector("#message");//correct/try again message
var diffBtns = document.querySelectorAll(".difficulty");//all difficulty buttons
var newBtn = document.querySelector("#new");//new game button
var easyBtn = document.querySelector("#easy");//easy button
var normBtn = document.querySelector("#normal");//normal button
var hardBtn = document.querySelector("#hard");//hard button
var answerText = document.querySelector("#answer");//RGB string answer to match color to
var answer;
var guess = "";
var correct = false;
var colors = [];
var numSquares = 6;

init();

function init() {
	//sets up difficulty buttons with event listeners
	setBtns();
	//call initial new game
	newGame();
}

//sets up button listeners
function setBtns() {
	//add event listener to execute newGame when New button clicked
	newBtn.addEventListener("click", function () {
		newGame();
	});

	//iterate over difficultly buttons to apply event listeners
	for (var i = 0; i < diffBtns.length; i++) {
		//when button is clicked, remove and apply selected/not-selected classes appropriately
		diffBtns[i].addEventListener("click", function() {
			for(var j = 0; j < diffBtns.length; j++) {
				diffBtns[j].classList.remove("selected");
				diffBtns[j].classList.add("not-selected");
			}
			//remove not-selected and apply selected class
			this.classList.remove("not-selected");
			this.classList.add("selected");
			//when button clicked, update numSquares value
			if(this.textContent === "Hard") {
				numSquares = 9;
			} else if (this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			//generate new game when button clicked
			newGame();
		});
		//when hovering over button, show difficulty level
		diffBtns[i].addEventListener("mouseover", function() {
			if(this.textContent === "Hard") {
				message.textContent = "9 Squares";
			} else if (this.textContent === "Easy") {
				message.textContent = "3 Squares";
			} else {
				message.textContent = "6 Squares";
			}
		});
		//when not hovering, remove difficulty level
		diffBtns[i].addEventListener("mouseout", function() {
			message.textContent = "";
		});
	}
}

//Clears current game, randomizes a list of colors, draws squares, generates and prints answer
function newGame() {
	clearSquares();
	randomRGBs(colors, numSquares);
	drawSquares(colors, numSquares);
	answer = getAnswer(colors, numSquares);
	answerText.textContent = answer;
	message.textContent = "";
	newBtn.textContent = "New Game";
}


//removes existing squares from screen
function clearSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].parentNode.removeChild(squares[i]);
	}
}

//generates list of random RGBs
function randomRGBs(colors, num) {
	for (var i = 0; i < num; i++) {
		colors[i] = "rgb(" 
		+ (Math.floor(Math.random() * 256)) 
		+ ", " 
		+ (Math.floor(Math.random() * 256))
		+ ", "
		+ (Math.floor(Math.random() * 256))
		+ ")";
	}
}

//draw squares to screen
function drawSquares(colors, num) {
	for (var i = 0; i < num; i++) {
		//creates empty div and adds necessary classes, colors, and event listeners
		var square = document.createElement("div");
		square.classList.add("square");
		square.style.backgroundColor = colors[i];
		//add listener for when square is clicked as guess
		square.addEventListener("click", function() {
			guess = this.style.backgroundColor;
			//if guess is equal to answer
			if (guess === answer) {
				correct = true;
				message.textContent = "Correct!";
				//call winner function
				winner();
			//else dim selected square
			} else {
				message.textContent = "Try Again!";
				this.style.opacity = ".3";
			}
		});
		//draw square to screen
		cont.appendChild(square);
	}
	//refreshes squares variable with new squares on screen
	squares = document.querySelectorAll(".square");
}

//generates random answer
function getAnswer(colors, num) {
	var random = Math.floor(Math.random() * num);
  	return colors[random];
}

//turns header background and all squares to the color of the correct guess
function winner() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = answer;
		header.style.backgroundColor = answer;
		newBtn.textContent = "Play Again?";
	}
}