const clean_indexElement = document.querySelector(".clean_group");
const toogleBtn = document.querySelector("#dark-mode-checkbox");
const cleanDate = document.querySelector(".text");
const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date();
const currentDay = today.getDay();
const Name = document.querySelector(".hiddenName").innerHTML;
const daysLeft = 5 - currentDay;
const form = document.querySelector(".form");
check_date = () => {
  if (currentDay === 0 || currentDay === 6) {
    cleanDate.innerHTML = "오늘은 학교 안가는 날~";
  } else {
   
    cleanDate.innerHTML = cleanDate.innerHTML + `${Name}님 청소${daysLeft}  일 남았습니다.`;
  }
};

let idx = 2;
const clean = () => {
  setInterval(() => {
    if (idx === 6) idx = 1;
    clean_indexElement.firstElementChild.innerHTML = `교실 청소: ${idx}조`;
    document.querySelector(".second_h2").innerHTML = `특별구역 청소: ${idx + 1 === 6 ? "1" : idx + 1}조`;

    [...clean_indexElement.lastElementChild.children].forEach((element) => {
      if (
        [...clean_indexElement.lastElementChild.children].indexOf(element) + 1 === idx
      ) {
        element.style.display = "block";
        if (element.nextElementSibling === null) {
          document.querySelector(".contentBox").innerHTML = clean_indexElement.lastElementChild.firstElementChild.innerHTML;
          element.innerHTML.includes(Name) ? check_date() : (cleanDate.innerHTML = "");
        } else {
            document.querySelector(".contentBox").innerHTML =element.nextElementSibling.innerHTML;
            element.nextElementSibling.innerHTML.includes(Name) ?   cleanDate.innerHTML = cleanDate.innerHTML + `${Name}님 청소${daysLeft} 일 남았습니다.` :(cleanDate.innerHTML = "");
            element.innerHTML.includes(Name) ? check_date() : (cleanDate.innerHTML = "");
        }
      } else {
        element.style.display = "none";
      }
    });
    idx++;
  }, 7000);
};
// setInterval(()=>{
// console.log(document.querySelector("#result").innerHTML.includes(Name));
// console.log(document.querySelector("#result").innerHTML);
// console.log(Name)
// },7000) 
//  ? alert('청소 하셔야됨'):'';


clean();

toogleBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});

form.lastElementChild.addEventListener("click",()=>{
    form.submit();
})

// [...clean_indexElement.lastElementChild.children].forEach((element) => {});
// console.log([...clean_indexElement.lastElementChild.children].find(Name) )
// [...clean_indexElement.lastElementChild.children].find(Name) ? check_date():cleanDate.innerHTML ='';
