document.getElementById('orderBtn').addEventListener('click', () => {
    const selectedFoodItems = Array.from(document.querySelectorAll('#foodOptions input:checked')).map(checkbox => checkbox.value);
  
    if (selectedFoodItems.length === 0) {
      alert('Please select at least one food item.');
      return;
    }
  
    simulateOrder(selectedFoodItems);
  });
  
  function simulateOrder(selectedFoodItems) {
    const orderPromise = new Promise((resolve) => {
      const randomSeconds = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Random seconds between 5 and 10
      setTimeout(() => {
        resolve();
      }, randomSeconds * 1000);
    });
  
    orderPromise.then(() => {
      const randomOrderId = Math.floor(Math.random() * 1000) + 1;
      displayOrder(selectedFoodItems, randomOrderId);
    });
  }
  
  function displayOrder(selectedFoodItems, orderId) {
    const foodDisplay = document.getElementById('foodDisplay');
    const foodImage = document.getElementById('foodImage');
    const orderNumber = document.getElementById('orderNumber');
  
    // Set food image source (you can replace this with actual image URLs)
    const randomFoodImage = 'https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Hotdog-a164c2d.jpg?quality=90&webp=true&fit=700,466'; // Placeholder image
    foodImage.src = randomFoodImage;
  
    // Display the food image and order number
    foodDisplay.style.display = 'block';
    orderNumber.textContent = `Order ID: ${orderId}`;
  
    // Reset checkboxes for the next order
    document.querySelectorAll('#foodOptions input:checked').forEach(checkbox => {
      checkbox.checked = false;
    });
  }
  