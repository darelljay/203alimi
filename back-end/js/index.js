const clean_indexElement = document.querySelector(".clean_group");
const toogleBtn = document.querySelector("#dark-mode-checkbox")
let idx = 2;
const clean = () => {
    setInterval(() => {
        if (idx === 6) idx = 1;
        clean_indexElement.firstElementChild.innerHTML = `교실 청소: ${idx}조`;
        document.querySelector(".second_h2").innerHTML = `특별구역 청소: ${idx + 1 === 6 ? '1' : idx + 1}조`;
        [...clean_indexElement.lastElementChild.children].forEach(element => {
            if ([...clean_indexElement.lastElementChild.children].indexOf(element) + 1 === idx) {
                element.style.display = 'block';
                if (element.nextElementSibling === null) {
                    document.querySelector(".contentBox").innerHTML = clean_indexElement.lastElementChild.firstElementChild.innerHTML;
                } else {
                    document.querySelector(".contentBox").innerHTML = element.nextElementSibling.innerHTML;
                }
            } else {
                element.style.display = 'none';
            }
        })
        idx++;
    }, 7000);
}
clean();

toogleBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
});
