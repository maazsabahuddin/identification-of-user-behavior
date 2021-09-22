document.body.style.backgroundColor = 'lightblue';

var clicked_elements = [];
document.addEventListener('click',function(e){
    clicked_elements.push(e.target);
    console.log(clicked_elements);
});

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

// console.log(getCurrentTab());
  