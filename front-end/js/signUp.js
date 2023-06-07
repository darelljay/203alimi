const form_tag = document.querySelector('.form');
const toogleBtn = document.querySelector("#toogle");
const errMsg = document.querySelectorAll('.errMsg');
const btn = document.querySelector('#btn');
let name,id,pw,student_id;

[...form_tag.children].forEach(element=>{
    if(element.id === 'name'){
        name = element;
    }else if(element.id === 'id'){
        id = element;
    }else if(element.id === 'student_id'){
        student_id = element;
    }else if(element.id === 'password'){
        pw = element;
    }
});

let return_statemant;
const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
const check_null = () =>{

    [...form_tag.children].forEach(element=>{
        if(element.id === 'name' && element.value === ''){
          errMsg[0].innerHTML = '이름을 입력해주세요!'
          return_statemant = true;
          element.className = 'nullInput';
          element.focus();
          console.log(element);
        }else if(element.id === 'id' && element.value === ''){
            errMsg[1].innerHTML = '아이디를 입력해주세요!';
            element.className = 'nullInput';
            return_statemant = true;
            element.focus();
            console.log(element);
        }else if(element.id === 'student_id' && element.value === ''){
            errMsg[2].innerHTML = '학번을 입력해주세요!';
            element.className = 'nullInput';
            return_statemant = true;
            element.focus();
            console.log(element);
        }else if(element.id === 'password' && element.value === ''){
            errMsg[3].innerHTML = '비밀번호를 입력해주세요!';
            element.className = 'nullInput';
            return_statemant = true;
            element.focus();
            console.log(element);
        }else{
            return_statemant = false;
        }
    });
    return return_statemant;
}

const check_pw = () =>{
[...form_tag.children].forEach(element=>{
    if(element.id === 'password' && element.value !== ''){
        if(!reg.test(element.value)){
            alert("비밀번호는 8자 이상 숫자 대문자 소문자 ,  특수문자를 모두 포함해야 합니다.");
            element.className = 'nullInput';
            return_statemant = true; 
            element.focus();
        }else{
            return_statemant = false;
        }
    }
});
 return return_statemant;
};

const check_null2 = () =>{
    [...form_tag.children].forEach(element=>{   
        if(element.id === 'name' && element.value !== ''){
            errMsg[0].innerHTML = '';
          element.className = 'input';
        }
         if(element.id === 'id' && element.value !== ''){
            errMsg[1].innerHTML = '';
          element.className = 'input';
        }
         if(element.id === 'student_id' && element.value !== ''){
            errMsg[2].innerHTML = ''
          element.className = 'input';

        }
         if(element.id === 'password' && element.value !== ''){
            errMsg[3].innerHTML = ''
            element.className = 'input';
        }
    });
}



btn.addEventListener('click',()=>{
    if(check_null()){
      return alert('입력란을 모두 체워 주신후 제출하시기 바랍니다');
    }else if(check_pw()){
        console.log('succsess')
    }else{
        check_null2();
        form_tag.submit()
    }
});

toogleBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
  });

  