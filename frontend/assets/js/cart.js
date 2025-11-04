var cart = JSON.parse(localStorage.getItem('ss_cart') || '[]');

function saveCart() {
  localStorage.setItem('ss_cart', JSON.stringify(cart));
}

function addToCart(item) {
  // Check if item with same ID and size already exists
  var existingIndex = cart.findIndex(function(cartItem) {
    return cartItem.id === item.id && cartItem.size === item.size;
  });
  
  if (existingIndex >= 0) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push(item);
  }
  saveCart();
  updateCartDisplay();
}

function updateCartDisplay() {
  var listEl = document.getElementById('cart-items');
  var totalEl = document.getElementById('cart-total');
  if (!listEl) return;
  listEl.innerHTML = '';
  var total = 0;
  
  if (cart.length === 0) {
    listEl.innerHTML = '<li class="text-center py-8 opacity-80">Your cart is empty</li>';
    if (totalEl) totalEl.textContent = '₹ 0.00';
    return;
  }
  
  for (var i = 0; i < cart.length; i++) {
    var li = document.createElement('li');
    li.className = 'flex items-center justify-between border-b border-white/10 pb-4';
    var name = cart[i].name || 'Sneaker';
    var size = cart[i].size ? ' (Size ' + cart[i].size + ')' : '';
    var quantity = cart[i].quantity || 1;
    var price = Number(cart[i].price || 0);
    var itemTotal = price * quantity;
    total += itemTotal;
    
    li.innerHTML = `
      <div class="flex-1">
        <div class="flex items-center gap-3">
          <img src="${cart[i].imageUrl || 'assets/img/placeholder.png'}" alt="${name}" class="w-16 h-16 object-cover rounded-md" />
          <div>
            <h3 class="font-display text-lg">${name}${size}</h3>
            <p class="opacity-80">₹ ${price.toFixed(2)} each</p>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2">
          <button class="quantity-btn w-8 h-8 rounded border border-white/20 hover:border-primary" data-index="${i}" data-action="decrease">-</button>
          <span class="w-8 text-center">${quantity}</span>
          <button class="quantity-btn w-8 h-8 rounded border border-white/20 hover:border-primary" data-index="${i}" data-action="increase">+</button>
        </div>
        <span class="w-20 text-right font-semibold">₹ ${itemTotal.toFixed(2)}</span>
        <button class="remove-btn text-red-400 hover:text-red-300 ml-2" data-index="${i}">Remove</button>
      </div>
    `;
    listEl.appendChild(li);
  }
  
  // Add event listeners for quantity and remove buttons
  var quantityBtns = listEl.querySelectorAll('.quantity-btn');
  var removeBtns = listEl.querySelectorAll('.remove-btn');
  
  for (var j = 0; j < quantityBtns.length; j++) {
    quantityBtns[j].addEventListener('click', function(e) {
      var index = parseInt(e.target.dataset.index);
      var action = e.target.dataset.action;
      
      if (action === 'increase') {
        cart[index].quantity += 1;
      } else if (action === 'decrease' && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      }
      
      saveCart();
      updateCartDisplay();
    });
  }
  
  for (var k = 0; k < removeBtns.length; k++) {
    removeBtns[k].addEventListener('click', function(e) {
      var index = parseInt(e.target.dataset.index);
      cart.splice(index, 1);
      saveCart();
      updateCartDisplay();
    });
  }
  
  if (totalEl) totalEl.textContent = '₹ ' + total.toFixed(2);
}

function checkout() {
  alert('Proceeding to checkout...');
}

document.addEventListener('DOMContentLoaded', updateCartDisplay);


