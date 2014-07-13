$(document).ready(function(){

//Start page with hidden tweet button and char-count

	$('#tweet-controls').hide();

//When Text clicked, double text area size & show tweet controls

	//create class to double tweet-compose window size.
	// var doubleHeightClass = function(param){
 //      debugger
	// }


	// $('.tweet-compose').on('focus',function () {
	// 	$(this).toggle(function(){
	// 		doubleHeightClass($(this));
	// 	})

	// });

	$('#tweet-compose').on("focus", function() {
  if($(this).hasClass("toggled"))
    $(this).animate({"height": "100px"}).removeClass("toggled");
  else
    $(this).animate({"height": "50px"}).addClass("toggled");
}

});