import { constructOptions } from "./modules/constructOptions.js";
let page = document.getElementById("buttonDiv");
function openEdit(e) {
  let currentKey = e.target.innerText;
  chrome.storage.sync.set({ currentKey });
  window.location.href = "./edit.html";
}
// Initialize the page by constructing the color options
constructOptions(page);



export { openEdit };


