// Select all buttons with class 'add-to-cart'
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Select the cart container
const cartContainer = document.querySelector('.sidebar');

// Function to handle the click event
function handleAddToCartClick(event) {
 // Get the button that was clicked
 const button = event.target;

 // Get the product card that contains the button
 const productCard = button.closest('.product-card');

 // Get the product name, price, and image from the product card
 const productName = productCard.querySelector('h2').textContent;
 const productPrice = parseFloat(productCard.querySelector('.price').textContent.slice(2));
 const productImage = productCard.querySelector('img').src;

 // Create a new div element to display the product in the cart
 const cartItem = document.createElement('div');
 cartItem.classList.add('cart-item');
 cartItem.innerHTML = `
    <img src="${productImage}" alt="${productName}" width="100">
    <h3>${productName}</h3>
    <div class="price">R ${productPrice.toFixed(2)}</div>
 `;

 // Append the new div element to the cart container
 const cartItemContainer = cartContainer.querySelector('#cartItem');
 cartItemContainer.innerHTML = '';
 cartItemContainer.appendChild(cartItem);

 // Update the cart count
 const cartCount = document.querySelector('#count');
 cartCount.textContent = parseInt(cartCount.textContent) + 1;
}

// Attach the click event listener to all 'add-to-cart' buttons
addToCartButtons.forEach(button => button.addEventListener('click', handleAddToCartClick));

// Assume that cart_items is a list of dictionaries, where each dictionary represents an item in the cart
cart_items = [
  {'name': 'Product 1', 'price': 650.00, 'quantity': 2},
  {'name': 'Product 2', 'price': 800.00, 'quantity': 1},
  {'name': 'Product 3', 'price': 950.00, 'quantity': 3},
];

// Calculate the total price by iterating over each item in the cart and multiplying the price by the quantity
total_price = cart_items.reduce((total, item) => total + item.price * item.quantity, 0);

// Print the total price
console.log('Total Price:', total_price);

document.getElementById('checkOut').addEventListener('click', function() {
  /* let quantity = parseInt(document.getElementById('quantity').value);
  let price = parseInt(document.getElementById('price').value);
  let total = quantity * price; */
  document.getElementById('total').value = 'R' + total;
});
