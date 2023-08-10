    // Fetch products from the FakeStore API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        const productsContainer = document.getElementById('products');
        products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card'); // Add 'product-card' class for styling
          productCard.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}" alt="${product.title}" width="200">
            <p>${product.description}</p>
            <p>Rating: ${product.rating.rate} (${product.rating.count})</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
          `;
          productsContainer.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching products:', error));