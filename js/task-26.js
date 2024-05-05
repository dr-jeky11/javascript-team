/*
Задача 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

const list = document.querySelector(".grid");

list.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("gridItem")) {
        event.target.style.opacity = 0;
    }
})

list.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("gridItem")) {
        event.target.style.opacity = 1;
    }
})