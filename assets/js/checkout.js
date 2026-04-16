document.addEventListener('DOMContentLoaded', function onReady() {
  var orderSummaryEl = document.getElementById('order-summary');
  var totalEl = document.getElementById('order-total');
  var form = document.getElementById('checkout-form');

  var cart = JSON.parse(localStorage.getItem('ss_cart') || '[]');

  function renderSummary() {
    if (!orderSummaryEl) return;
    orderSummaryEl.innerHTML = '';
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      var row = document.createElement('div');
      row.className = 'flex items-center justify-between border-b border-white/10 pb-2';
      var qty = Number(item.quantity || 1);
      var price = Number(item.price || 0);
      total += qty * price;
      row.innerHTML = '<span>' + (item.name || 'Item') + ' (x' + qty + ')</span>' +
        '<span>₹ ' + (qty * price).toFixed(2) + '</span>';
      orderSummaryEl.appendChild(row);
    }
    if (totalEl) totalEl.textContent = '₹ ' + total.toFixed(2);
  }

  renderSummary();

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Basic client-side presence validation
      var requiredIds = ['full-name','email','address','city','state','zip'];
      for (var i = 0; i < requiredIds.length; i++) {
        var el = document.getElementById(requiredIds[i]);
        if (!el || !el.value.trim()) {
          alert('Please fill out ' + requiredIds[i].replace('-', ' ') + '.');
          if (el) el.focus();
          return;
        }
      }

      // Create purchase payload for backend
      var items = cart.map(function (it) {
        return { id: Number(it.id), quantity: Number(it.quantity || 1) };
      });

      fetch('http://localhost:8080/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: items })
      }).then(function (r) {
        if (!r.ok) return r.json().then(function (j) { throw new Error(j && j.error || 'Failed to purchase'); });
        return r.json();
      }).then(function () {
        // Store last order total locally for confirmation page
        localStorage.setItem('ss_last_order_total', totalEl ? totalEl.textContent : '₹ 0.00');
        // Clear cart
        localStorage.removeItem('ss_cart');
        window.location.href = 'order-confirmation.html';
      }).catch(function (err) {
        alert(err && err.message ? err.message : 'Purchase failed. Please try again.');
      });
    });
  }
});



