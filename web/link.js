// introduce.html 에서 사용

$('.link').click(function(){
    var In = confirm("접속하시겠습니까?");
    if(In==true){
      alert("접속");
    }
    else {
      alert("들어가세요");
    }
});
