// Угруповання за категоріями:
// У вас є масив об'єктів, кожен з яких є інформацією про продукт (назва, категорія). Напишіть функцію, яка групує продукти за категоріями.
const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Book", category: "Books" },
  { name: "Headphones", category: "Electronics" }
];

// Очікуванний результат { Electronics: ["Laptop", "Phone", "Headphones"], Books: ["Book"] }

function groupProducts(data) {
    const groupedProducts = {};
    for (const item of data) {
        const {category, name } = item;
        if (!groupedProducts[category]) groupedProducts[category] = [];
        
        groupedProducts[category].push(name);
    }
    return groupedProducts;
}
   console.log(groupProducts(products)); 
