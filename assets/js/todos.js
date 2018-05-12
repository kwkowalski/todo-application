//Check Off Specific Todo By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click On X To Delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Create New Todo
$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//Grabbing New Todo Text From Input
		var todoText = ($(this).val());
		$(this).val("");
		//Create A New li And Add To ul
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i> </span>" + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});