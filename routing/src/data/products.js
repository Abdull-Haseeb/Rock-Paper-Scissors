const products = [];

for (let i = 1; i <= 300; i++) {
  products.push({
    id: i,
    name: `Product ${i}`,
    description: `Description for Product ${i}`,
    price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
  });
}

export default products;
