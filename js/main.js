$(document).ready(function(){

	console.log("working");

//input//
	$("#input-b").on('click', function(){
		var input = $('#myInput').val()
			$('#list').prepend('<li class="item"><button class="mark">☑</button>' + input + '</li>');
		$('#myInput').val('');
	})

//Strike-through//
	$(document).on('click', '.mark', function(){
		$(this).closest('li').toggleClass('strike');
	})


});