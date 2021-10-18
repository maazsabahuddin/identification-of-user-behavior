
var cart_counter = 0;

document.getElementById('add_to_cart-btn')?.addEventListener('click', function() {
  cart_counter += 1;
  document.getElementById("add-product").textContent = "Your current products are: " + cart_counter;
});
