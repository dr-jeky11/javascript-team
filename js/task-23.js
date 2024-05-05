
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const btn = document.querySelector("#passwordButton");
const inputText = document.querySelector("#passwordInput");

btn.addEventListener("click", changeBtn("Open","Close"))

function changeBtn(btnTextOpen, btnTextClose) {
    return function () {
        if (inputText.type === "text") {
            inputText.setAttribute("type", "password");
            btn.textContent = btnTextOpen
        }
        else {
            inputText.setAttribute("type", "text");
            btn.textContent = btnTextClose
        }
    }
}