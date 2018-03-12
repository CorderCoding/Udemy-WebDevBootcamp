var p1ScoreEl = document.querySelector("#playerOneScore");
var p1Score = 0;
var p2Score = 0;
var p2ScoreEl = document.querySelector("#playerTwoScore");
var addP1 = document.querySelector("#addPlayerOne");
var addP2 = document.querySelector("#addPlayerTwo");
var resetBtn = document.querySelector("#reset");
var maxScore = document.querySelector("#maxScore");
var maxEl = document.querySelector("#max");
var max = Number(maxScore.value);
var gameOver = false;

//adds 1 to player 1's score as long as neither player has won
addP1.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		//adds the .won class to player 1's score if they win
		if (p1Score === max) {
			p1ScoreEl.classList.add("won");
			gameOver = true;
		}	
		p1ScoreEl.textContent = p1Score;
	}	
});

//adds 1 to player 2's score as long as neither player has won
addP2.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		//adds the .won class to player 2's score if they win
		if (p2Score === max) {
			p2ScoreEl.classList.add("won");
			gameOver = true;
		}
		p2ScoreEl.textContent = p2Score;
	}
});

//updates max as long as neither player has won based on number input field
maxScore.addEventListener("change", function() {
	reset(); 
});

//resets the score counter
resetBtn.addEventListener("click", function() {
	reset();
});

function reset() {
	max = Number(maxScore.value);
	maxEl.textContent = maxScore.value;
	gameOver = false;
	p1Score = 0;
	p1ScoreEl.textContent = 0;
	p1ScoreEl.classList.remove("won");
	p2Score = 0;
	p2ScoreEl.textContent = 0;
	p2ScoreEl.classList.remove("won");
}