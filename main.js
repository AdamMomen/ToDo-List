//This is for adding a new task once we click on the + button 
$('#button').click(function () {
	var value = $('#text').val() ; 
	if (value === '') {
		return alert('Please enter a task !')
	} else {
	 $('#text').val('');	
return	$('#list').prepend('<br class="br">'+'<li id="LISTA">'+'✦' + '    '+  value + '</li>');
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
		return	$('#list').prepend('<li id="LISTA">' +'✦' + '    ' + value + '</li>');
		}
	}
 event.stopPropagation();
});
