$(document).ready(function(){
  setInterval(function(){
    $("#main-top").css("color", "skyblue");
  }, 499);
});

$(document).ready(function(){
  setInterval(function(){
    $("#main-top").css("color", "blue");
  }, 1001);
});

setInterval(function(){
	$('#top').fadeOut(1000);
  $('#top').fadeIn(1000);
});
