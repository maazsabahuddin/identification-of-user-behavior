
console.log("HELLO THIS IS FINE..")

document.addEventListener('DOMContentLoaded', function() {
  var share_btn = document.getElementById('share_data');
  // onClick's logic below:
  console.log(share_btn);
  share_btn.addEventListener('click', function() {
      console.log("WOW");
      // alert("Hello");
  });

});
