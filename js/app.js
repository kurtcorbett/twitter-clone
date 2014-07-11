$(document).ready(function(){
	
	
	//alert($('.tweet-compose').length);
	// //Step 1 capture click in text area
	// $('.tweet-compose').focus(function() {	
	// //Step 2 toggle the tweet-controls
	// 	//$('#dashboard').toggle();
	// 	$('#tweet-controls').toggle();
	// });

$('.tweet-compose').keyup(function () {
  var ten = 10;	
  var max = 140;
  var len = $(this).val().length;
  if (len >= (max - ten)) {
    $('#char-count').css('color','red');
  } else {
    $('#char-count').css('color','black');
  }
  if (len >= (max)) {
    $('#tweet-controls').hide();
  } else {
    var char = max - len;
    $('#char-count').text(char);
  }
});

});

//<textarea class="tweet-compose" placeholder="Compose new Tweet..."></textarea>

//jklfa;jklfsad;jklafsdjklfsadjklfsad;jklfsad;jklfsadjklfads;jklfsad;jklfsad;jklfsad;jklfsadjklfsadjklfsad;jklfsadjkl;fsad;jklfsadj