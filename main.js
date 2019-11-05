$('#button').click(function () {
	var value = $('#text').val() ; 
	if (value === '') {
		return alert('Please enter a task !')
	} else {
		myTodoList.add(value);
	 		$('#text').val('');	
				return $('#list').prepend('<div id="LISTA">' + value + '<div>');
	}
});
//This is for the enter key press
$('#text').keypress(function(event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13') {
     var value = $('#text').val() ; 
			if (value === '') {
				return alert('Please enter a task !')
					} else {
						$('#text').val('');
	 						myTodoList.add(value);	
       		  		 $("#Todo").prepend('<div id="LISTA">' + value + '<div>');
		}
	}
 event.stopPropagation();
});
/// 
//$('#').click(function () {
///
// $.each(todos, function(index, value){
//             $("#Todo").append('<div id="LISTA">' + value[i].task + '<div><br>');
//           }