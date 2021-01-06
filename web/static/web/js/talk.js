$(document).ready(function(){

  var width_1= 0;
  var width_2= 0;

  setTimeout(function(){
    $('.recieve_box').css('display','inline-block');
    $('#second_section > div.recieve_box > div.message').css('display','inline-block');
  }, 1500);

  setTimeout(function(){
    $('#second_section > div.send_box > div:nth-child(1)').css('display','inline-block');
    var ele_1=document.getElementById('progressing_1');
    var id_1 =setInterval(frame1, 45);

    function frame1(){
        if(width_1>=100){
            clearInterval(id_1);
        }else{
            width_1 += 3;
            ele_1.style.width=width_1-20+"%";
            ele_1.innerHTML=width_1-2+"%";
        }
    }
  }, 3000);


  setTimeout(function(){
    $('#second_section > div.send_box > div:nth-child(3)').css('display','inline-block');
    var ele_2=document.getElementById('progressing_2');
    var id_2 =setInterval(frame2, 45);

    function frame2(){
        if(width_2>=100){
            clearInterval(id_2);
        }else{
            width_2 += 3;
            ele_2.style.width=width_2-20+"%";
            ele_2.innerHTML=width_2-2+"%";
        }
    }
  }, 4500);

  setTimeout(function(){
    $('#second_section > div.send_box > div:nth-child(5)').css('display','inline-block');
  }, 6000);

});

function button_click(){
  $.magnificPopup.open({
    items:[
      {
        src:"http://www.lottosi.kr/form",
        type:'iframe'
      }
    ]
  });
  window.top.location.replace("http://www.lottosi.kr/form");
}
