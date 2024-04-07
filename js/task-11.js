// Обчислення середнього віку:
// У вас є масив об'єктів, кожен з яких являє собою інформацію про людину (ім'я та вік). Напишіть функцію, яка обчислює середній вік всіх людей у цьому масиві.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

function age(people) {
    let average = 0;
    for (const person of people) {
    average += person.age
}
    return average/people.length;
}

console.log(age(people));