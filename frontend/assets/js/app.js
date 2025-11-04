// Minimal client script for demo purposes
document.addEventListener('DOMContentLoaded', function handleDOMContentLoaded() {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});

// Sneaker data for search suggestions (with descriptions from database)
const sneakerData = [
  // Jordan sneakers
  { id: 1, name: 'Air Jordan 1 Mid Racer Blue White Black', brand: 'Jordan', price: 11000, image: 'assets/img/jordan1.png', page: 'sneaker-detail.html?id=1&brand=jordan', description: 'A bold mix of blue, white and black creates a striking mid-cut silhouette. Premium leather overlays ensure lasting comfort. A timeless court classic reimagined for streetwear.' },
  { id: 2, name: 'Air Jordan 4 Retro Military Black', brand: 'Jordan', price: 18500, image: 'assets/img/jordan2.png', page: 'sneaker-detail.html?id=2&brand=jordan', description: 'Crisp white leather with black and grey accents delivers a clean, sharp look. Iconic mesh side panels and Air cushioning keep it true to form. A must-have for Jordan collectors.' },
  { id: 3, name: 'Air Jordan 1 Low Triple White', brand: 'Jordan', price: 9999, image: 'assets/img/jordan3.png', page: 'sneaker-detail.html?id=3&brand=jordan', description: 'The ultimate minimalist sneaker in all-white leather. Sleek lines and a low profile make it versatile for any outfit. Lightweight comfort meets legendary heritage.' },
  { id: 4, name: 'Air Jordan 11 Retro Cool Grey', brand: 'Jordan', price: 21500, image: 'assets/img/jordan4.png', page: 'sneaker-detail.html?id=4&brand=jordan', description: 'A beloved colorway featuring cool grey patent leather and white midsoles. Known for its premium finish and unmistakable shine. A statement piece both on and off the court.' },
  { id: 5, name: 'Air Jordan 3 Retro Fire Red', brand: 'Jordan', price: 19500, image: 'assets/img/jordan5.png', page: 'sneaker-detail.html?id=5&brand=jordan', description: 'Iconic elephant print meets vibrant Fire Red accents. A classic from MJ\'s era that never fades. Built for comfort, style, and nostalgia in every step.' },
  { id: 6, name: 'Air Jordan 5 Retro Green Bean', brand: 'Jordan', price: 17500, image: 'assets/img/jordan6.png', page: 'sneaker-detail.html?id=6&brand=jordan', description: 'Reflective silver uppers pair with bold green details for a futuristic vibe. Air cushioning and a translucent outsole complete the retro-modern look.' },
  { id: 7, name: 'Air Jordan 6 Carmine', brand: 'Jordan', price: 20000, image: 'assets/img/jordan7.png', page: 'sneaker-detail.html?id=7&brand=jordan', description: 'Red suede and white leather panels create striking contrast. Originally worn by MJ in 1991, this design is steeped in championship history. A true collector\'s item.' },
  { id: 8, name: 'Air Jordan 13 Retro Playoffs', brand: 'Jordan', price: 18999, image: 'assets/img/jordan8.png', page: 'sneaker-detail.html?id=8&brand=jordan', description: 'Premium black leather with yellow accents embodies playoff intensity. Inspired by MJ\'s dominant performances. Distinctive sole pods offer unmatched grip and comfort.' },
  
  // Yeezy sneakers
  { id: 9, name: 'Yeezy Slide Beluga 2', brand: 'Yeezy', price: 14399, image: 'assets/img/yeezy1.png', page: 'sneaker-detail.html?id=9&brand=yeezy', description: 'Ultra-soft EVA foam construction for cloud-like comfort. Sleek Beluga colorway blends style with ease. Ideal for casual wear and everyday luxury.' },
  { id: 10, name: 'Yeezy Boost 350 V2 Zebra', brand: 'Yeezy', price: 23000, image: 'assets/img/yeezy2.png', page: 'sneaker-detail.html?id=10&brand=yeezy', description: 'The famous Zebra pattern offers a bold streetwear edge. Boost midsole delivers responsive cushioning with every step. A modern icon in the sneaker world.' },
  { id: 11, name: 'Yeezy Foam Runner Sand', brand: 'Yeezy', price: 16500, image: 'assets/img/yeezy3.png', page: 'sneaker-detail.html?id=11&brand=yeezy', description: 'Futuristic design meets sustainability with its unique EVA and algae blend. Lightweight, breathable, and ultra-cushioned. A fashion-forward essential.' },
  { id: 12, name: 'Yeezy Boost 700 Wave Runner', brand: 'Yeezy', price: 28500, image: 'assets/img/yeezy4.png', page: 'sneaker-detail.html?id=12&brand=yeezy', description: 'Chunky silhouette with vibrant accents for a standout look. Premium suede and mesh uppers ensure breathability. Boost technology keeps comfort all day.' },
  { id: 13, name: 'Yeezy 500 Utility Black', brand: 'Yeezy', price: 21000, image: 'assets/img/yeezy5.png', page: 'sneaker-detail.html?id=13&brand=yeezy', description: 'Monochrome black mesh and suede offer a sleek yet rugged feel. Adiprene cushioning provides stable support. A dark essential for minimalist fits.' },
  { id: 14, name: 'Yeezy Boost 380 Alien Blue', brand: 'Yeezy', price: 24500, image: 'assets/img/yeezy6.png', page: 'sneaker-detail.html?id=14&brand=yeezy', description: 'Primeknit upper features unique patterns with a soft, sock-like fit. Alien Blue midsole gives futuristic flair. Ideal for both lifestyle and casual wear.' },
  { id: 15, name: 'Yeezy QNTM Lifestyle', brand: 'Yeezy', price: 22000, image: 'assets/img/yeezy7.png', page: 'sneaker-detail.html?id=15&brand=yeezy', description: 'Basketball performance meets lifestyle design. Reflective details and plush cushioning elevate every step. A hybrid sneaker that turns heads anywhere.' },
  { id: 16, name: 'Yeezy 450 Cloud White', brand: 'Yeezy', price: 19500, image: 'assets/img/yeezy8.png', page: 'sneaker-detail.html?id=16&brand=yeezy', description: 'Avant-garde sole design wraps around the knit upper for a striking effect. Lightweight and breathable construction. Perfect for modern, experimental looks.' },
  
  // Onitsuka Tiger sneakers
  { id: 17, name: 'Onitsuka Tiger Chugger Mid', brand: 'Onitsuka Tiger', price: 25000, image: 'assets/img/onitsuka1.png', page: 'sneaker-detail.html?id=17&brand=onitsuka', description: 'A rugged mid-top built for durability and everyday wear. Premium materials meet Japanese craftsmanship. A statement sneaker with a vintage edge.' },
  { id: 18, name: 'Onitsuka Tiger Mexico 66 White Gold', brand: 'Onitsuka Tiger', price: 11500, image: 'assets/img/onitsuka2.png', page: 'sneaker-detail.html?id=18&brand=onitsuka', description: 'White leather base with metallic gold stripes brings elegant flair. Lightweight structure ensures day-long comfort. A timeless retro runner.' },
  { id: 19, name: 'Onitsuka Tiger Serrano Black', brand: 'Onitsuka Tiger', price: 8900, image: 'assets/img/onitsuka3.png', page: 'sneaker-detail.html?id=19&brand=onitsuka', description: 'Sleek black upper with classic Onitsuka stripes. Inspired by 70s track shoes for a sporty aesthetic. Flexible rubber outsole ensures agile movement.' },
  { id: 20, name: 'Onitsuka Tiger GSM Cream Blue', brand: 'Onitsuka Tiger', price: 10500, image: 'assets/img/onitsuka4.png', page: 'sneaker-detail.html?id=20&brand=onitsuka', description: 'Cream leather uppers paired with pastel blue accents for a soft, premium vibe. Low-profile design ideal for casual wear. Vintage tennis-inspired styling.' },
  { id: 21, name: 'Onitsuka Tiger Corsair OG Blue', brand: 'Onitsuka Tiger', price: 9500, image: 'assets/img/onitsuka5.png', page: 'sneaker-detail.html?id=21&brand=onitsuka', description: 'Retro blue upper with bold stripes delivers old-school charm. Originally built for running, now perfect for lifestyle fits. Lightweight comfort for daily use.' },
  { id: 22, name: 'Onitsuka Tiger Lawnship 3.0', brand: 'Onitsuka Tiger', price: 8800, image: 'assets/img/onitsuka6.png', page: 'sneaker-detail.html?id=22&brand=onitsuka', description: 'Minimalist design with clean lines and premium leather. Slim silhouette pairs well with any outfit. A refined take on classic sneakers.' },
  { id: 23, name: 'Onitsuka Tiger Ultimate 81 Black', brand: 'Onitsuka Tiger', price: 9700, image: 'assets/img/onitsuka7.png', page: 'sneaker-detail.html?id=23&brand=onitsuka', description: 'A true retro runner featuring black suede and mesh panels. Heel stabilizers add support, while classic stripes complete the look. Built for everyday wear.' },
  { id: 24, name: 'Onitsuka Tiger Colorado Eighty-Five', brand: 'Onitsuka Tiger', price: 12500, image: 'assets/img/onitsuka8.png', page: 'sneaker-detail.html?id=24&brand=onitsuka', description: 'Trail-inspired silhouette with rugged soles and bold color blocking. Combines heritage running style with modern comfort. Ready for both city and adventure.' }
];

// Search functionality
function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchDropdown');
  const searchResults = document.getElementById('searchResults');

  if (!searchInput || !searchDropdown || !searchResults) return;

  let searchTimeout;

  searchInput.addEventListener('input', function(e) {
    const query = e.target.value.trim().toLowerCase();
    
    clearTimeout(searchTimeout);
    
    if (query.length < 2) {
      searchDropdown.classList.add('hidden');
      return;
    }

    searchTimeout = setTimeout(() => {
      const filteredSneakers = sneakerData.filter(sneaker => 
        sneaker.name.toLowerCase().includes(query) || 
        sneaker.brand.toLowerCase().includes(query)
      );

      displaySearchResults(filteredSneakers);
    }, 150);
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.add('hidden');
    }
  });

  // Show dropdown when input is focused and has content
  searchInput.addEventListener('focus', function(e) {
    const query = e.target.value.trim().toLowerCase();
    if (query.length >= 2) {
      const filteredSneakers = sneakerData.filter(sneaker => 
        sneaker.name.toLowerCase().includes(query) || 
        sneaker.brand.toLowerCase().includes(query)
      );
      displaySearchResults(filteredSneakers);
    }
  });

  function displaySearchResults(sneakers) {
    if (sneakers.length === 0) {
      searchResults.innerHTML = `
        <div class="px-4 py-3 text-text-dark text-center">
          <span class="material-symbols-outlined text-2xl mb-2 block">search_off</span>
          No sneakers found
        </div>
      `;
    } else {
      searchResults.innerHTML = sneakers.map(sneaker => `
        <a href="${sneaker.page}" class="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors duration-200 group">
          <img src="${sneaker.image}" alt="${sneaker.name}" class="w-12 h-12 object-cover rounded-lg">
          <div class="flex-1 min-w-0">
            <div class="font-body font-semibold text-text-light group-hover:text-accent transition-colors duration-200 truncate">
              ${sneaker.name}
            </div>
            <div class="text-sm text-text-dark">
              ${sneaker.brand} • ₹${sneaker.price.toLocaleString()}
            </div>
          </div>
          <span class="material-symbols-outlined text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            arrow_forward
          </span>
        </a>
      `).join('');
    }
    
    searchDropdown.classList.remove('hidden');
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeSearch();
});


