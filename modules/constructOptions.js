import { openEdit } from '../options.js';

function constructOptions(page) {
    chrome.storage.sync.get("keys", (data) => {
      let currentKeys = data.keys;
      console.log(currentKeys);
      // For each color we were provided…
      for (let key in currentKeys) {
        // …create a button with that color…
        let button = document.createElement("button");
        button.innerText = key;
        button.id = key;
        console.log(key);
        
  
        button.addEventListener("click", openEdit);
  
        page.appendChild(button);
      }
    });
  }

  export { constructOptions };
  