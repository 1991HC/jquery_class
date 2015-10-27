// $('Selector').action
//check if document has loaded
$(document).ready(function()
{
	// to 
	$("p").hide(); //Hides element

	//works if mouse hovered in h1

	$("h1").mouseenter(function()
	{
		$(this).fadeOut(2000);
		$("body").css("background-color", "green");

	}); //end 
	//button click

	$("#btn1").click(function()
	{

		$("#content").append("This is My DIv.. It has more content<br><hr>");

		$("#content").animate(
		{
			height: '400px',
			width: '340px'

		});
	});

	//add a css class to elements
	$("#left").addClass("leftcontent");

	$("#right").addClass("rightcontent");

	$("#left").removeClass("leftcontent");




});