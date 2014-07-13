$(document).ready(function(){
  $('#tweet-controls').hide();
  


  $('.tweet-compose').focus(function(){
  $(this).height(66);
  $('#tweet-controls').show();
  })

  $('.tweet-compose').blur(function(){
  $(this).height(21);
  })

  $('.tweet-compose').keyup(function () {
    var max = 140;
    var len = $(this).val().length;
    var maxMinusTen = max - 10; 
    var char = max - len;

  $('#char-count').text(char); 

  if (len > max) {
    $('#tweet-submit').attr('disabled', true);
  } else {
    $('#tweet-submit').attr('disabled',false);
  }

  if (len >= maxMinusTen) {
    $('#char-count').css('color','red');
  } else {
    $('#char-count').css('color','black')
  }



});



});

//<textarea class="tweet-compose" placeholder="Compose new Tweet..."></textarea>

//jklfa;jklfsad;jklafsdjklfsadjklfsad;jklfsad;jklfsadjklfads;jklfsad;jklfsad;jklfsad;jklfsadjklfsadjklfsad;jklfsadjkl;fsad;jklfsadj