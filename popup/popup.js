
var cart_counter = 0;

document.getElementById('add_to_cart-btn')?.addEventListener('click', function() {
  cart_counter += 1;
  document.getElementById("add-product").textContent = "Your current products are: " + cart_counter;
  alert("Your product has been added.");
});

document.getElementById('share-btn')?.addEventListener('click', function() {
  if (cart_counter === 1)
    alert("Your cart containing "+cart_counter+" product has been shared. \nWe will send you confirmation email shortly.");
  else
    alert("Your cart containing "+cart_counter+" products has been shared. \nWe will send you confirmation email shortly.");
});
