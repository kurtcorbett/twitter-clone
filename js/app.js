$(document).ready(function(){
  $('#tweet-controls').hide();
  $('#tweet-submit').attr('disabled',true);

  $('.tweet-compose').focus(function(){
    $(this).height(66);
    $('#tweet-controls').show();
  });

  $('.tweet-compose').blur(function(){
    if($(this).val().length === 0) { 
      $(this).height(21);
    };
  });

  $('.tweet-compose').keyup(function () {
    var max = 140;
    var len = $(this).val().length;
    var maxMinusTen = max - 10; 
    var char = max - len;

    $('#char-count').text(char); 

    if (len > max) {
      $('#tweet-submit').attr('disabled', true);
    } else if (len < 1) {
      $('#tweet-submit').attr('disabled',true);
    } else {
      $('#tweet-submit').attr('disabled',false);
    }

    if (len >= maxMinusTen) {
      $('#char-count').css('color','red');
    } else {
      $('#char-count').css('color','black')
    }

  });

  var timeStamp = new Date();



  var user = {
    'fullName': 'Kurt Corbett',
    'userName': 'Kcorbett',
    'img': 'avatar',
    'imgSrc': 'img/alagoon.jpg'
  };



  var addNewTweet = function(user,tweetText) {
      $('#stream').prepend(

        '<div class="tweet">'+
            '<div class="content">'+
              '<img class="' + user.img +'" src="' + user.imgSrc + '" />'+  
              '<strong class="fullname">' + user.fullName + '</strong> '+
              '<span class="username">' + user.userName + '</span>'+

              '<p class="tweet-text">' + tweetText + '</p>'+

              '<div class="tweet-actions">'+
                '<ul>'+
                  '<li><span class="icon action-reply"></span> Reply</li>'+
                  '<li><span class="icon action-retweet"></span> Retweet</li>'+
                  '<li><span class="icon action-favorite"></span> Favorite</li>'+
                  '<li><span class="icon action-more"></span> More</li>'+
                '</ul>'+
              '</div>'+

              '<div class="stats">'+
                '<div class="retweets">'+
                  '<p class="num-retweets">30</p>'+
                  '<p>RETWEETS</p>'+
                '</div>'+
                '<div class="favorites">'+
                  '<p class="num-favorites">6</p>'+
                  '<p>FAVORITES</p>'+
                '</div>'+
                '<div class="users-interact">'+
                  '<div>'+

                    '<img src="img/alagoon.jpg" />'+
                    '<img src="img/vklimenko.jpg" />'+
                  '</div>'+
                '</div>'+

                '<div class="time">'+
                  '' + timeStamp + ''+
                '</div>'+
              '</div>'+
              '<div class="reply">'+
                '<img class="avatar" src="img/alagoon.jpg" />'+
                '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'+
              '</div>'+
            '</div>'+
          '</div>'

    )}

    $('#tweet-submit.button').on('click', function () {
      var tweetText = $('.tweet-compose').val();
      addNewTweet(user,tweetText);
      $('.tweet-compose').val('');
      $('.tweet-compose').blur();
    }); 




});
