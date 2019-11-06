
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
       		  		 			$("#list").prepend('<li id="LISTA">' + value + ' ' +'<h6 id="H6">'+time.getHours() +' : ' + time.getMinutes()  + '</h6></li>');
		}
	}
 event.stopPropagation();
});
///////////
$("ul").on("click", "li", function(){
    $('#LISTA').toggle('.checked');;
});
////
 // $("ul").click(function(){
 //            $('#LISTA').wrap("<strike>");
 //        });
///////////
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate() + 1);    
$('h4').html('<span id="span">' + dayNames[newDate.getDay()]+ '</span>' + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' +'<div id="time">' + newDate.getHours() + ' : ' + newDate.getMinutes() +'</div>');

('LISTA').add('span')
///
// $('ul li').click(function {
// 	('').css( 'text-decoration', 'line-through')
// }

///
// $.each(todos, function(index, value){
//             $("#Todo").append('<div id="LISTA">' + value[i].task + '<div><br>');
//           }
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);