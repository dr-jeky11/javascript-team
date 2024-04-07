// Об'єднання масивів:
// Ви маєте кілька масивів об'єктів з однаковою структурою. Напишіть функцію, яка об'єднує ці масиви в один масив об'єктів.
const arrays = [
  [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }],
  [{ id: 3, name: "Charlie" }, { id: 4, name: "David" }]
];

function newArray(data) {
    const resaultArray = [];
    for (const array of data) {
        resaultArray.push(...array);
    }
    return resaultArray;
}


console.log(newArray(arrays));