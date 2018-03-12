var age = Number(prompt("Enter your age."));

if (age < 0) {
	console.log("That is not possible!");
} else if (age < 18) {
	console.log("Sorry, you are not old enough to enterthe venue");
} else if (age < 21) {
	console.log("you can enter, but you cannot drink");
} else {
	console.log("Come on in. You can drink.");
}

if (age === 21) {
	console.log("Happy 21st Birthday!!");
}

if (age % 2 !== 0) {
	console.log("Your age is odd!");
}

if (Math.sqrt(age) % 1 === 0) {
	console.log("perfect Square!");
}