/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
    
const outCircle = document.querySelector(".outerCircle");

outCircle.addEventListener("click", () => {
    if (outCircle.style.position === "absolute") {
        outCircle.style.position = "static";
        window.removeEventListener("mousemove", mouseMove);
        return
    }
    outCircle.style.position = "absolute";
    window.addEventListener("mousemove", mouseMove)
})

function mouseMove(event) {
    const left = event.pageX 
    const top = event.pageY
    outCircle.style.top = `${top-15}px`;
    outCircle.style.left = `${left-15}px`;
}