
let keyEdit = document.getElementById("keyEdit");
let page = document.getElementById("allBits");
keyEdit.addEventListener("click", addingUrl);

function addingUrl(ev) {
ev.preventDefault();
chrome.storage.sync.get("keys", ({ keys }) => {
chrome.storage.sync.get("currentKey", ({ currentKey }) => {
let input_url = document.getElementById("new_url").value;  
keys[currentKey].push(input_url);
chrome.storage.sync.set({keys});
document.forms[0].reset();
});
  
})


}
function displayBits(page) {
    chrome.storage.sync.get("keys", ({ keys }) => {
    chrome.storage.sync.get("currentKey", ({ currentKey }) => {
      // For each color we were provided…
      for (let bit in keys[currentKey]) {
        // …create a button with that color…
        let p = document.createElement("p");
        p.innerText = keys[currentKey][bit];
        console.log(bit);
        
        let button = document.createElement("button");
        button.innerText = "delete";
        button.id = bit
        button.addEventListener("click", deleteBit)
  
        page.appendChild(p);
        page.appendChild(button);
      }
    });
})}

    function deleteBit(e) {
    let bitPosition = e.target.id
    chrome.storage.sync.get("keys", ({ keys }) => {
    chrome.storage.sync.get("currentKey", ({ currentKey }) => {
    keys[currentKey].splice(bitPosition, 1)
    console.log(keys[currentKey]);
    chrome.storage.sync.set({keys})
    })
    
    
    console.log(keys);
})}

    displayBits(page)
