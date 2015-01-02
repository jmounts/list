$(document).ready(function(){

	console.log("working");

//input//
	$("#input-b").on('click', function(){
		var input = $('#myInput').val()
			$('#list').prepend('<li class="item"><button class="mark">☑</button>' + input + '<button class="remove-item">X</button></li>');
		$('#myInput').val('');
	})

//Strike-through//
	$(document).on('click', '.mark', function(){
		$(this).closest('li').toggleClass('strike');
	})

//remove item//
	$(document).on('click', '.remove-item', function(){
		$(this).closest('li').fadeOut(300);
	})

//reset//
	$('#reset').on('click', function(){
		$('li').remove();
	})

});