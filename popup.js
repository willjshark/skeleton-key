// import { constructOptions } from './modules/constructOptions.js';

let page = document.getElementById("buttonDiv");
// let workKey = document.getElementById("workKey");
// let socialKey = document.getElementById("socialKey");

// workKey.addEventListener("click", openLinks);
// socialKey.addEventListener("click", openLinks);

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
      

      button.addEventListener("click", openLinks);

      page.appendChild(button);
    }
  });
}

function openLinks(e) {
    chrome.storage.sync.get("keys", ({ keys }) => {
     let keyName = e.target.innerText
     console.log(keyName)
    createTabs(keys[keyName])
     });
      
    }


function createTabs(links) {
  links.forEach((link) => {
    chrome.tabs.create({ url: link });
  });
}

constructOptions(page)