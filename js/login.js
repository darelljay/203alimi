const toogleBtn = document.querySelector("#toogle");
const form = document.querySelector(".form");
const btn = document.querySelector("#btn");
const errMsg = document.querySelectorAll(".errMsg");
form.addEventListener("load", (e) => {
  e.preventDefault();
});

toogleBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});

const student_info = document.querySelectorAll(".form>input");

const check_null = () => {
  student_info.forEach((element, index) => {
    element.addEventListener("blur", () => {
      if (element.value === "") {
        element.className = "nullInput";
        errMsg[index].innerHTML = "입력란을 채워주세요";
      } else {
        element.className = "input";
        errMsg[index].innerHTML = "";
      }
    });
  });
};

check_null();

const check_pw = () => {
  student_info[2].addEventListener('blur',()=>{
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (!reg.test(student_info[2].value)) {
      errMsg[2].innerHTML = "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다."
      student_info[2].className = "nullInput"
      console.log(student_info[2].value)
    }else{
      errMsg[2].innerHTML = ''
      student_info[2].className="input"
    }
  });
};

check_pw(student_info[2].innerHTML);


btn.addEventListener("click", () => {
  check_null();
});
