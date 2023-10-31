let openCart = document.querySelector('.cart');
let closeCart = document.querySelector('.closeCart');
let list = document.querySelector('.productsContainer');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.counter');

openCart.addEventListener('click', ()=> {
  body.classList.add('active');
})
closeCart.addEventListener('click', ()=> {
  body.classList.remove('active');
})

let products = [
  {
    id: 1,
    name: 'Skater Maxi',
    image: '../images/1.png',
    price: 850,
    instock: 2
  },
  {
    id: 2,
    name: 'Daska Maxi',
    image: '../images/2.png',
    price: 580,
    instock: 5
  },
  {
    id: 3,
    name: 'Anarkali Maxi',
    image: '../images/3.png',
    price: 1200,
    instock: 25
  },
  {
    id: 4,
    name: 'Curved Maxi',
    image: '../images/4.png',
    price: 900,
    instock: 10
  },
  {
    id: 5,
    name: 'Maya Petite',
    image: '../images/5.png',
    price: 1500,
    instock: 20
  },
  {
    id: 6,
    name: 'Satin Maxi',
    image: '../images/6.png',
    price: 850,
    instock: 15
  },
];

let cardList = JSON.parse(localStorage.getItem("CART"));
reloadCard();

function createCard(){
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('product-card');
    newDiv.innerHTML = `
    <img src= "image/${value.image}">
    <div class="title">${value.name}</div>
    <div class="price">R${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Cart</button>`;
    list.appendChild(newDiv);
  })
}
createCard();

function addToCard(key) {
  if (cardList[key] == null) {
    cardList[key] = JSON.parse(JSON.stringify(products[key]));
    cardList[key].quantity = 1;
  } else {
    // Check if quantity is within stock limit
    if (cardList[key].quantity + 1 <= products[key].instock) {
      cardList[key].quantity = cardList[key].quantity + 1;
    } else {
      alert("Sorry, we are out of stock");
    }
  }
  reloadCard();
}


  function reloadCard() {
    listCard.innerHTML = ``;
    let count = 0;
    let totalPrice = 0;
    cardList.forEach((value, key) => {
      if (value) { // Check if the value is not null or undefined
        totalPrice = totalPrice + (value.price || 0); // Use a default value if price is missing
        count = count + (value.quantity || 0); // Use a default value if quantity is missing
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
          <div><img src="image/${value.image || ''}"/></div>
          <div>${value.name || ''}</div>
          <div>R${(value.price || 0).toLocaleString()}</div>
          <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
          </div>`;
        listCard.appendChild(newDiv);
      }
    });
    total.innerText = "Total: R" + totalPrice.toLocaleString();
    quantity.innerText = count;

    localStorage.setItem("CART", JSON.stringify(cardList));
  }
  function changeQuantity(key, quantity){
    if(quantity == 0){
      delete cardList[key];
    }else{
      cardList[key].quantity = quantity;
      cardList[key].price = quantity * products[key].price;
      console.log(changeQuantity)
    }
    reloadCard();
  }


