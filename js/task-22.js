/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const btn = document.querySelector("#swapButton")

const leftInput = document.querySelector("#leftSwapInput")

const rightInput = document.querySelector("#rightSwapInput")

btn.addEventListener("click", () => {
    const extraValue = leftInput.value;
    leftInput.value = rightInput.value;
    rightInput.value = extraValue;
})