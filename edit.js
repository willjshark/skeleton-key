
let keyEdit = document.getElementById("keyEdit");

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
