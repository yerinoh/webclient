// index.html에서 사용
$(document).ready(function(){
  var i=1;
  setInterval(function(){
    i++;
    if(i>3){ i=1; }
    $("#main-image").fadeOut("slow");
    $("#main-image").attr("src", "png/main" + i + ".jpg");
    $("#main-image").fadeIn("slow");
  }, 3000);
});



///////////////////////////////////////////////////////////////////

// introduce.html, attraction.html에서 사용
$("#para-title1").click(function(){
  $("#paragraph1").slideToggle(1000);
});
$("#para-title2").click(function(){
  $("#paragraph2").slideToggle(1000);
});
$("#para-title3").click(function(){
  $("#paragraph3").slideToggle(1000);
});
$("#para-title4").click(function(){
  $("#paragraph4").slideToggle(1000);
});
$("#para-title5").click(function(){
  $("#paragraph5").slideToggle(1000);
});
$("#para-title6").click(function(){
  $("#paragraph6").slideToggle(1000);
});

///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
//tip.html에서 사용
scroll_right(function(){
  $('.tips_picture').scrollRight($('.tips_picture').scrollRight() + 50);
});

scroll_left(function(){
  $('.tips_picture').scrollLeft($('.tips_picture').scrollLeft() + 50);
});
