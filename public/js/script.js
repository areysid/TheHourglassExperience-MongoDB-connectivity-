const productContainer = document.querySelector('.product-container');

// Get the width of the first product element (assuming all products have the same width)
const productWidth = productContainer.firstElementChild.clientWidth;

// Define the number of products initially visible in the viewport
const visibleProducts = 4; 

// Set the container width to accommodate the desired number of visible products
productContainer.style.width = productWidth * visibleProducts + 'px'; 

function scrollProducts(direction) {
  // Calculate the scroll amount based on the visible product count
  const scrollAmount = productWidth * visibleProducts;

  // Update the scroll position based on the direction (positive for right, negative for left)
  productContainer.scrollLeft += direction * scrollAmount;

  // Check if reaching the end and need to circle back
  if (productContainer.scrollLeft + productContainer.clientWidth >= productContainer.scrollWidth) {
    productContainer.scrollLeft = 0;
  }
}

// Add event listeners for optional navigation buttons (assuming their IDs are correct)
document.getElementById('nextBtn').addEventListener('click', () => scrollProducts(1));
document.getElementById('prevBtn').addEventListener('click', () => scrollProducts(-1));


