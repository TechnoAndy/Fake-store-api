let openCart = document.querySelector('.cart');
let closeCart = document.querySelector('.closeCart');
let list = document.querySelector('.productsContainer');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.count');

openCart.addEventListener('click', ()=> {
  body.classList.add('active');
})
closeCart.addEventListener('click', ()=> {
  body.classList.remove('active');
})

let products = [
  {
    id: 1,
    name: 'Summer Dress',
    image: '../images/1.png',
    price: 6500
  },
  {
    id: 2,
    name: 'Summer Dress',
    image: '../images/1.png',
    price: 8500
  },
  {
    id: 3,
    name: 'Summer Dress',
    image: '../images/1.png',
    price: 1200
  },
];

let cardList = [];
function createCard(){
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('product-card');
    newDiv.innerHTML = `
    <img src = "image/${value.image}">
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Cart</button>`;
    list.appendChild(newDiv);
  })
}
createCard();