document.addEventListener('DOMContentLoaded', function onReady() {
  const urlParams = new URLSearchParams(window.location.search);
  const sneakerId = urlParams.get('id');
  const brand = urlParams.get('brand');
  
  if (!sneakerId || !brand) {
    document.getElementById('sneaker-detail').innerHTML = '<div class="text-center py-8"><p class="opacity-80">Invalid sneaker ID or brand.</p></div>';
    return;
  }

  // Fetch sneaker details
  fetch(`http://localhost:8080/api/sneakers?brand=${encodeURIComponent(brand)}`)
    .then(r => r.json())
    .then(items => {
      const sneaker = items.find(s => s.id == sneakerId);
      if (!sneaker) {
        document.getElementById('sneaker-detail').innerHTML = '<div class="text-center py-8"><p class="opacity-80">Sneaker not found.</p></div>';
        return;
      }
      
      renderSneakerDetail(sneaker);
    })
    .catch(() => {
      document.getElementById('sneaker-detail').innerHTML = '<div class="text-center py-8"><p class="opacity-80">Failed to load sneaker details.</p></div>';
    });
});

function renderSneakerDetail(sneaker) {
  const container = document.getElementById('sneaker-detail');
  
  container.innerHTML = `
    <div class="space-y-6">
      <img class="w-full h-96 object-cover rounded-lg border border-primary/30" src="${sneaker.imageUrl}" alt="${sneaker.name}" />
    </div>
    
    <div class="space-y-6">
      <div>
        <h1 class="text-4xl font-display font-black mb-2">${sneaker.name}</h1>
        <p class="text-3xl font-bold text-primary">₹ ${Number(sneaker.price).toFixed(2)}</p>
      </div>
      
      <div>
        <h2 class="text-xl font-display mb-3">Description</h2>
        <p class="opacity-80 leading-relaxed">${sneaker.description || 'Premium sneaker with exceptional comfort and style. This authentic piece combines timeless design with modern comfort, perfect for both casual wear and special occasions.'}</p>
      </div>
      
      <div>
        <h2 class="text-xl font-display mb-3">Size</h2>
        <div class="grid grid-cols-3 gap-2 max-w-xs">
          ${[7, 8, 9, 10, 11, 12].map(size => 
            `<button class="size-btn border border-white/20 rounded-md py-2 px-4 text-center hover:border-primary hover:bg-primary/10 transition-colors" data-size="${size}">${size}</button>`
          ).join('')}
        </div>
        <p class="text-sm opacity-60 mt-2">Select your size</p>
      </div>
      
      <div class="flex gap-4">
        <button id="add-to-cart" class="flex-1 px-6 py-3 rounded bg-primary text-black font-display text-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled>
          Add to Cart
        </button>
        <button id="buy-now" class="flex-1 px-6 py-3 rounded border border-primary text-primary font-display text-lg hover:bg-primary hover:text-black transition-colors">
          Buy Now
        </button>
      </div>
      
      <!-- Customer Reviews Section -->
      <div class="mt-12">
        <h2 class="text-2xl font-display font-black mb-6">Customer Reviews</h2>
        <div class="space-y-6">
          <div class="bg-black/40 rounded-lg p-4 border border-primary/30">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                <span class="text-black font-bold">S</span>
              </div>
              <div>
                <h3 class="font-display">Sarah Kim</h3>
                <div class="flex text-primary text-sm">★★★★★</div>
              </div>
            </div>
            <p class="opacity-80 text-sm">"Perfect fit and amazing quality! The leather is so soft and the design is exactly as shown. Shipping was super fast too."</p>
          </div>
          
          <div class="bg-black/40 rounded-lg p-4 border border-primary/30">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold">D</span>
              </div>
              <div>
                <h3 class="font-display">David Park</h3>
                <div class="flex text-primary text-sm">★★★★★</div>
              </div>
            </div>
            <p class="opacity-80 text-sm">"Love these sneakers! Great comfort and style. The sizing was accurate and the quality exceeded my expectations."</p>
          </div>
          
          <div class="bg-black/40 rounded-lg p-4 border border-primary/30">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold">L</span>
              </div>
              <div>
                <h3 class="font-display">Lisa Thompson</h3>
                <div class="flex text-primary text-sm">★★★★★</div>
              </div>
            </div>
            <p class="opacity-80 text-sm">"Absolutely stunning! The attention to detail is incredible. These are definitely worth every penny. Highly recommend!"</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add size selection functionality
  const sizeButtons = container.querySelectorAll('.size-btn');
  const addToCartBtn = container.querySelector('#add-to-cart');
  const buyNowBtn = container.querySelector('#buy-now');
  let selectedSize = null;
  
  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeButtons.forEach(b => b.classList.remove('border-primary', 'bg-primary/10'));
      btn.classList.add('border-primary', 'bg-primary/10');
      selectedSize = btn.dataset.size;
      addToCartBtn.disabled = false;
    });
  });
  
  // Add to cart functionality
  addToCartBtn.addEventListener('click', () => {
    if (!selectedSize) return;
    
    const cartItem = {
      id: sneaker.id,
      name: sneaker.name,
      price: sneaker.price,
      size: selectedSize,
      imageUrl: sneaker.imageUrl,
      quantity: 1
    };
    
    addToCart(cartItem);
    
    // Show success message
    const originalText = addToCartBtn.textContent;
    addToCartBtn.textContent = 'Added!';
    addToCartBtn.disabled = true;
    setTimeout(() => {
      addToCartBtn.textContent = originalText;
      addToCartBtn.disabled = false;
    }, 2000);
  });
  
  // Buy now functionality
  buyNowBtn.addEventListener('click', () => {
    if (!selectedSize) {
      alert('Please select a size first.');
      return;
    }
    
    const cartItem = {
      id: sneaker.id,
      name: sneaker.name,
      price: sneaker.price,
      size: selectedSize,
      imageUrl: sneaker.imageUrl,
      quantity: 1
    };
    
    addToCart(cartItem);
    window.location.href = 'checkout.html';
  });
}

function addToCart(item) {
  const cart = JSON.parse(localStorage.getItem('ss_cart') || '[]');
  
  // Check if item with same ID and size already exists
  const existingIndex = cart.findIndex(cartItem => 
    cartItem.id === item.id && cartItem.size === item.size
  );
  
  if (existingIndex >= 0) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push(item);
  }
  
  localStorage.setItem('ss_cart', JSON.stringify(cart));
}
