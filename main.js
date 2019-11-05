$('#button').click(function () {
	var value = $('#text').val() ; 
	if (value === '') {
		return alert('Please enter a task !')
	} else {
		myTodoList.add(value);
	 $('#text').val('');	
	// return	$('#list').append('<div id="DIV"><li>' + value + '</li></div>');
//return	$('#list').append('<br>'+'<li id="LISTA">' + value + '</li>');
			return $('#list').append('<br>'+'<li id="LISTA">' + value + '</li>');

	}
});
//This is for the enter key press
$('#text').keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                 var value = $('#text').val() ; 
	if (value === '') {
		return alert('Please enter a task !')
	} else {
	 $('#text').val('');
	 			myTodoList.add(value);	
	// return	$('#list').append('<div id="DIV"><li>' + value + '</li></div>');
			//	return	$('#Todo').append('<li id="LISTA">' + value + '</li>')
			//$.each(todos, function(index, value1){
				console.log(value1);	
            $("#Todo").append('<div id="LISTA">' + value + '<div>');
     // });
		}
	}
 event.stopPropagation();
});

///
// $.each(todos, function(index, value){
//             $("#Todo").append('<div id="LISTA">' + value[i].task + '<div><br>');
//           }