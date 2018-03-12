//Object containing movies
var movies = [
	{
		title: "The Matrix",
		rating: 5,
		hasWatched: true
	},
	{
		title: "The Patriot",
		rating: 3.5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 3,
		hasWatched: false
	}
]

movies.forEach(function(movie) {
	if (movie.hasWatched === true) {
		console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
	} else {
		console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
	}
});