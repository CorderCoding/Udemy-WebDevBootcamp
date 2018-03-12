
//toggles display of input box for new items
$("span").on("click", function() {
	$("input").slideToggle("fast");
});

//when input is focused, placeholder text goes away
$("input").on("focusin", function() {
	$(this).attr("placeholder", "");
});

//when input loses focus, placeholder text is replaced
$("input").on("focusout", function() {
	$(this).attr("placeholder", "Type New ToDo Item");
});

//when enter is pressed while input is focused,
//the new item is added to the ul
$("input").on("keypress", function(k) {
	if (k.which === 13) {
		var item = $(this).val();
		if(item !== ""){ 
			$("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span>" + item + "</li>");
			$(this).val("");
		}
	}
});

$("ul").on("click","li", function(event) {
	$(this).toggleClass("done");
});


$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(400, function() {
		$(this).remove();
	});
	event.stopPropagation();
})