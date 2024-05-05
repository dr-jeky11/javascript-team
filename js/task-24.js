/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const box = document.querySelector("#box");

let boxWidth = parseInt(getComputedStyle(box).width);
let boxHeight = parseInt(getComputedStyle(box).height);

increaseBtn.addEventListener("click", () => {
    box.style.width = `${boxWidth+=10}px`;
    box.style.height = `${boxHeight+=10}px`;
})

decreaseBtn.addEventListener("click", () => {
    box.style.width = `${boxWidth-=10}px`;
    box.style.height = `${boxHeight-=10}px`;
})