
  //news.html <form> 유효성 검사
  function validate() {
         var re2 = /^[0-9]{3,4}$/;
         var re3 = /^[0-9]{4}$/;

         var phone_number_2 = document.getElementById("phone_number_2");
         var phone_number_3 = document.getElementById("phone_number_3");

         if(!check(re2,phone_number_2,"전화번를 올바르게 입력해주세요.\n('-'기호는 입력하지 않습니다.)")) {
             return false;
         }
         if(!check(re3,phone_number_3,"전화번를 올바르게 입력해주세요.\n('-'기호는 입력하지 않습니다.)")) {
             return false;
         }
         if(!$("#agreement").is(":checked")){
            alert("개인정보 처리방침에 동의해주세요.");
            return false;
         }
     }

  function check(re, what, message) {
      if(re.test(what.value)) {
          return true;
      }
      alert(message);
      what.value = "";
      what.focus();
  }
