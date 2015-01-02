$(document).ready(function(){

	console.log("working");

	$("#input-b").on('click', function(){
		var input = $('#myInput').val()
			$('#list').append('<li>' + input + '</li>');
		$('#myInput').val('');
	})

});