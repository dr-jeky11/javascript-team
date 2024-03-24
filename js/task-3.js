/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? 70 === 01:10
 */
// const globalMinutes = 70;
// const hours = String(Math.floor(globalMinutes / 60)).padStart(2, "0");
// const minutes = String(globalMinutes % 60).padStart(2, "0") ;
// console.log(minutes);

// console.log(hours);

// console.log(`${hours}:${minutes}`);

function convertTime(globalMinutes) {
    const hours = String(Math.floor(globalMinutes / 60)).padStart(2, "0");
    const minutes = String(globalMinutes % 60).padStart(2, "0");
    return `${hours}:${minutes}`;
}

console.log(convertTime(90));
console.log(convertTime(75));
console.log(convertTime(85));
console.log(convertTime(80));
console.log(convertTime(150));