document.addEventListener('DOMContentLoaded', function onReady() {
  var total = localStorage.getItem('ss_last_order_total') || '₹ 0.00';
  var totalEl = document.getElementById('oc-total');
  if (totalEl) totalEl.textContent = total;

  var stars = document.querySelectorAll('.star[data-rating]');
  var message = document.getElementById('rating-message');
  for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', function handleStarClick(e) {
      var rating = e.currentTarget.getAttribute('data-rating');
      if (message) message.textContent = 'You rated us ' + rating + ' out of 5. Thank you!';
      // Persist rating if desired
      localStorage.setItem('ss_last_rating', String(rating));
    });
  }
});


