$('input').focus(function(){
  $(this).next('span').removeAttr('hidden');
});

$('input').blur(function(){
  $(this).next('span').attr('hidden', 'hidden');
});

$('#signin_submit').click(function(){
  var var_1 = $('#name').val();
  var var_2 = $('#ID').val();
  var var_3 = $('#PW').val();
  var var_4 = $('#PN').val();
  var var_5 = $('#RS').val();

  if(var_1!="" && var_2!="" && var_3!="" && var_4!="" && var_5!=""){
    var info = confirm(var_1+"님 입력하신 정보가 정확합니까?");
    if(info==true){
      alert($('#ID').val() + " 님 회원가입 되셨습니다.");
      document.getElementById("login").reset()
    }
    else {
      alert("다시 입력해주세요.");
    }
  }
  else {
    alert("정보를 입력해주세요.");
  }
});
