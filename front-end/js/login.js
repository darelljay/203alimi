const form_tag = document.querySelector(".form");
const toogleBtn = document.querySelector("#toogle");
const errMsg = document.querySelectorAll(".errMsg");
const btn = document.querySelector("#btn");

let id, pw, student_id;

[...form_tag.children].forEach((element) => {
  if (element.id === "id") {
    id = element;
  } else if (element.id === "student_id") {
    student_id = element;
  } else if (element.id === "password") {
    pw = element;
  }
});

const check_null = () => {
  let return_statemant;
  [...form_tag.children].forEach((element) => {
    if (element.id === "id" && element.value === "") {
      errMsg[0].innerHTML = "아이디를 입력해주세요!";
      element.className = "nullInput";
      return_statemant = true;
      element.focus();
    } else if (element.id === "student_id" && element.value === "") {
      errMsg[1].innerHTML = "학번을 입력해주세요!";
      element.className = "nullInput";
      return_statemant = true;
      element.focus();
    } else if (element.id === "password" && element.value === "") {
      errMsg[2].innerHTML = "비밀번호를 입력해주세요!";
      element.className = "nullInput";
      return_statemant = true;
      element.focus();
    } 
  });
  return return_statemant;
};

const check_null2 = () => {
  [...form_tag.children].forEach((element) => {
    if (element.id === "id" && element.value !== "") {
      errMsg[0].innerHTML = "";
      element.className = "input";
    }
    if (element.id === "student_id" && element.value !== "") {
      errMsg[1].innerHTML = "";
      element.className = "input";
    }
    if (element.id === "password" && element.value !== "") {
      errMsg[2].innerHTML = "";
      element.className = "input";
    }
  });
};

btn.addEventListener('click',()=>{
  if(check_null()){
    return alert('입력란을 모두 체워 주신후 제출하시기 바랍니다');
  }else{
      check_null2();
      form_tag.submit()
  }
});

toogleBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});

