

let items = [
    { price: 0, count: 0, originalPrice: 10.99, increment: 10.99 },
    { price: 0, count: 0, originalPrice: 20.48, increment: 20.48 }
  ];
  
  let itemElements = document.querySelectorAll('.b');
  
  itemElements.forEach((itemElement, index) => {
    let increaseButton = itemElement.querySelector('#Increase');
    let decreaseButton = itemElement.querySelector('#Decrease');
    let countLabel = itemElement.querySelector('#count');
    let priceElement = itemElement.previousElementSibling;
  
    increaseButton.onclick = function() {
      items[index].count += 1;
      countLabel.innerHTML = items[index].count;
      let totalPrice = items[index].price + items[index].increment;
      items[index].price = totalPrice;
      priceElement.innerHTML = `Price: $${totalPrice.toFixed(2)}`;
    };
  

    decreaseButton.onclick = function() {
        if (items[index].count > 0) {
          const currentItem = items[index];
          currentItem.count -= 1;
          const newPrice = Math.max(0, currentItem.price - currentItem.increment);
          currentItem.price = newPrice;
          priceElement.innerHTML = `Price: $${newPrice.toFixed(2)}`;
          
          const countElement = document.getElementById("count");
          countElement.innerHTML = currentItem.count;
        }
      };
  
    document.getElementById(`Reset`).onclick = function() {
      items.forEach(item => {
        item.count = 0;
        item.price = 0;
      });
      document.querySelectorAll('#count').forEach(label => label.innerHTML = 0);
      document.querySelectorAll('h4').forEach(priceElement => {
        let itemIndex = Array.prototype.indexOf.call(itemElements, priceElement.nextElementSibling);
        priceElement.innerHTML = `Price: $${items[itemIndex].price.toFixed(2)}`;
      });
    };
  });