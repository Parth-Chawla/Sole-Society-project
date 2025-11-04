// Shared footer component for all pages
function addFooter() {
  const footer = `
    <footer class="bg-background-light/50 border-t-2 border-primary/20 mt-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <!-- About Us -->
          <div>
            <h3 class="text-xl font-display font-bold mb-4 text-primary">About Sole Society</h3>
            <p class="text-sm opacity-80 leading-relaxed">
              Mumbai's premier destination for authentic sneakers and streetwear. 
              We curate the finest collection of Jordan, Yeezy, and Onitsuka Tiger sneakers, 
              bringing you the latest drops and timeless classics. Our passion for sneaker culture 
              drives us to provide exceptional quality and service to every customer.
            </p>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h3 class="text-xl font-display font-bold mb-4 text-primary">Contact Us</h3>
            <div class="space-y-3 text-sm">
              <div class="flex items-center">
                <span class="text-primary mr-2">📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div class="flex items-center">
                <span class="text-primary mr-2">✉️</span>
                <span>hello@solesociety.in</span>
              </div>
              <div class="flex items-center">
                <span class="text-primary mr-2">📍</span>
                <span>Andheri East, Mumbai 400069</span>
              </div>
            </div>
          </div>
          
          <!-- Social Media -->
          <div>
            <h3 class="text-xl font-display font-bold mb-4 text-primary">Follow Us</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <span class="text-primary mr-2">📷</span>
                <span class="text-sm">@solesociety_mumbai</span>
              </div>
              <div class="flex items-center">
                <span class="text-primary mr-2">💬</span>
                <span class="text-sm">WhatsApp: +91 98765 43210</span>
              </div>
              <div class="flex items-center">
                <span class="text-primary mr-2">📱</span>
                <span class="text-sm">Customer Care: +91 98765 43211</span>
              </div>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="text-xl font-display font-bold mb-4 text-primary">Quick Links</h3>
            <div class="space-y-2 text-sm">
              <div><a href="index.html" class="opacity-80 hover:text-primary transition-colors">Home</a></div>
              <div><a href="brand-jordan.html" class="opacity-80 hover:text-primary transition-colors">Jordan Collection</a></div>
              <div><a href="brand-yeezy.html" class="opacity-80 hover:text-primary transition-colors">Yeezy Collection</a></div>
              <div><a href="brand-onitsuka.html" class="opacity-80 hover:text-primary transition-colors">Onitsuka Collection</a></div>
              <div><a href="cart.html" class="opacity-80 hover:text-primary transition-colors">Shopping Cart</a></div>
            </div>
          </div>
        </div>
        
        <div class="border-t border-white/10 pt-6 text-center text-sm text-text-dark">
          <p>© 2024 SOLE SOCIETY. ALL RIGHTS RESERVED. | Made with ❤️ in Mumbai</p>
        </div>
      </div>
    </footer>
  `;
  
  // Insert footer before closing body tag
  document.body.insertAdjacentHTML('beforeend', footer);
}

// Auto-add footer when DOM is loaded
document.addEventListener('DOMContentLoaded', addFooter);

