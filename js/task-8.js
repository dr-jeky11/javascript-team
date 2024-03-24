// Напишіть функцію, яка приймає рядок як аргумент і повертає новий рядок, в якому регістр кожного символу інвертовано (великі літери стають маленькими, а маленькі – великими)
// invertCase("Hello World")
function invertCase(str) {
    let invertString = "";
    for (const letter of str) {
        console.log(letter); 
        if (letter === letter.toUpperCase()) {
            invertString += letter.toLowerCase();
        }else {invertString += letter.toUpperCase();}
    }
    return invertString


}
console.log(invertCase("hELlo World"))

