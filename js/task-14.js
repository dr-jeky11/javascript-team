// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function sales(arr) {
    const Array = [];
    for (const fruit of arr) {
        Array.push({...fruit, price: fruit.price * 0.8, id: fruit.name});
    }
    return Array;
}

console.log(sales(fruits));
console.log(fruits);