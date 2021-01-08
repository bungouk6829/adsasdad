$(document).ready(function(){

  // Taboola Pixel Code
  function input_db(){
    _tfa.push({notify: 'event', name: 'lead', id: 1357718});
    document.write("<noscript><img src='https://trc.taboola.com/1357718/log/3/unip?en=lead'width='0' height='0' style='display:none'/></noscript>");
  }

  var random = Math.random()
  var min_num = Math.floor(random * 100000 + 2958592)
  var max_num = Math.floor(random * 1000 + min_num)

  $(function() {
		  var cnt0 = min_num;
		  counterFn();
		  function counterFn() {
		    id0 = setInterval(count0Fn, 0);
		    function count0Fn() {
		      cnt0++;
		      if (cnt0 > max_num) {
		        clearInterval(id0);
		      }
           else {
            num = cnt0.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		        $("#random").text(num);
		      }
		    }
		  }
		});

    var width = 5;
    var ele_1=document.getElementById('progressing_1');
    var id_1 =setInterval(frame1, 45);

    var ele_2=document.getElementById('progressing_2');
    var id_2 =setInterval(frame2, 45);

    var ele_3=document.getElementById('progressing_3');
    var id_3 =setInterval(frame3, 45);

    var ele_4=document.getElementById('progressing_4');
    var id_4 =setInterval(frame4, 45);

    function frame1(){
        if(width>=100){
            clearInterval(id_1);
        }else{
            width ++;
            ele_1.style.width=width-20+"%";
            ele_1.innerHTML=width+2+"%";
        }
    }

    function frame2(){
        if(width>=100){
            clearInterval(id_2);
        }else{
            width ++;
            ele_2.style.width=width-20+"%";
            ele_2.innerHTML=width+1+"%";
        }
    }

    function frame3(){
        if(width>=100){
            clearInterval(id_3);
        }else{
            width ++;
            ele_3.style.width=width-20+"%";
            ele_3.innerHTML=width+"%";
        }
    }

    function frame4(){
        if(width>=100){
            clearInterval(id_4);
        }else{
            width ++;
            ele_4.style.width=width-20+"%";
            ele_4.innerHTML=width+3+"%";
        }
    }

    setTimeout(function(){
      alert("1등 당첨번호 분석이 완료되었습니다.\n당첨번호를 받으시겠습니까?");
      $('.ai_box').css('display','none');
      $('.form_box').css('display','block');
    }, 5000);


});
