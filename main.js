
$('#button').click(function () {
	var value = $('#text').val() ; 
	if (value === '') {
		return alert('Please enter a task !')
	} else {
		myTodoList.add(value);
	 		$('#text').val('');	
				return $('#list').prepend('<li id="LISTA">' + value + '</li>');
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
	 						var time = new Date();
       		  		 			$("#list").prepend('<li id="LISTA">' + value + ' ' +'<h6 id="H6">'+time.getHours() +': ' + time.getMinutes()  + '</h6></li>');
		}
	}

 event.stopPropagation();
});
///////////
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate() + 1);    
$('h4').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
/// 
// $('ul li').click(function {
// 	('').css( 'text-decoration', 'line-through')
// }

///
// $.each(todos, function(index, value){
//             $("#Todo").append('<div id="LISTA">' + value[i].task + '<div><br>');
//           }