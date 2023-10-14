const productCard = [
  {
    name: 'Summer Dress 1',
    image: 'dress-2.avif',
    price: 950,
  },
  {
    name: 'Summer Dress 2',
    image: 'dress-2.avif',
    price: 950,
  },
  {
    name: 'Summer Dress 3',
    image: 'dress-2.avif',
    price: 950,
  },
  {
    name: 'Summer Dress 4',
    image: 'dress-2.avif',
    price: 950,
  },
];

/* const catergories = [
  ...new Set(
    productCard.map((item) => {
      return item;
    })
  ),
];
let i = 0;

document.getElementById('product-card').innerHTML = catergories.map((item) => {
  var { name, image, price } = item;
  return `
  <div class="product-card">
    <h2 class="name">${name}</h2>
    <img src="${image}" alt="dress-1" width="200">
    <div class="price">${price}</div>
    <button class="add-to-cart">Add to cart</button>
  </div>
    `;
}); */

const cart = [];

cart.push(productCard);

console.log(cart);
