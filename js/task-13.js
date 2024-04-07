//Підрахунок загальної вартості:
//У вас є масив об'єктів, що являють собою товари та їх ціни. Напишіть функцію, яка підраховує загальну вартість усіх товарів.
const items = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 700 },
    { name: "Headphones", price: 150 }

]
  
function totalCost(data) {
    let total = 0;
    for (const item of data) {
        total += item.price;
    }
    return total;
}
    console.log(totalCost(items));