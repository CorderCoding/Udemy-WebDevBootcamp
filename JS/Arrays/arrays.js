console.log("Here is a list of the functions written by default when this page loads.")
console.log("printReverse() - takes an array as an argument and console.logs the array in reverse item by item.")
console.log("isUniform() - takes an array as argument and returns true or false based on whether or not the entire array contains the same value.")
console.log("sumArray() - takes an array of numbers as an argument and returns the sum of the entire array.")
console.log("max() - takes an array of numbers as an argument and returns the maximum element in the array.")
console.log("There is one predefined array named \"arr\" containing the values [1,2,3,4,5].")

//printReverse() function
var arr = [1,2,3,4,5];
function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

//isUniform() function
function isUniform(array) {
	var comp = array[0];
	for (var i = 1; i < array.length; i++) {
		if (comp !== array[i]) {
			return false;
		}
	}
	return true;
}

//sumArray() function
function sumArray(array) {
	var sum = 0;
	array.forEach(function(element) {
		sum+= element;
	});
	return sum;
}

//max() function
function max(array) {
	var max = 0;
	array.forEach(function(element) {
		if (element > max) {
			max = element;
		}
	});
	return max;
}