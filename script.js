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
    image: '../images/2.png',
    price: 8500
  },
  {
    id: 3,
    name: 'Summer Dress',
    image: '../images/3.png',
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

function addToCard(key){
  if(cardList[key] ==null){
    cardList[key] = JSON.parse(JSON.stringify(products[key]));
    cardList[key].quantity = 1;
    }
    reloadCard();
  }

  function reloadCard(){
    cardList.innerHTML = ``;
    let count = 0;
    let totalPrice = 0;
    cardList.forEach((value, key)=>{
      totalPrice = totalPrice + value.price;
      count = count + value.quantity;
      if(value != null){
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
        <div><img src="image/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>`;
        listCard.appendChild(newDiv);
      }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
  }
  function changeQuantity(key, quantity){
    if(quantity == 0){
      delete cardList[key];
    }else{
      cardList[key].quantity = quantity;
      cardList[key].price = quantity * products[key].price;
    }
    reloadCard();
  }