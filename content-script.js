// RUN BELOW LINE to check if the extension working fine
// document.body.style.backgroundColor = 'lightblue';

var clicked_elements = [];
document.addEventListener('click',function(e){
    clicked_elements.push(e.target);
    console.log(clicked_elements);
});


// document.getElementById('add_to_cart-btn')?.addEventListener('click', function() {
//     console.log("MMM");
//     cart_counter += 1;
//     document.getElementById("add-product").innerHTML = "Your current products are: ", cart_counter;
// });

// async function getCurrentTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// }

// console.log(getCurrentTab());
  