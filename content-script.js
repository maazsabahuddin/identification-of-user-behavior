document.body.style.backgroundColor = 'lightblue';

var clicked_elements = []
document.addEventListener('click',function(e){
    console.log("Element ", e);
    console.log(e.target);
    clicked_elements.push(e.target);
    console.log(clicked_elements);
 });
