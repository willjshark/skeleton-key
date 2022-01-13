import { constructOptions } from './modules/constructOptions.js';

let page = document.getElementById("buttonDiv");



function openLinks(e) {
  console.log(e.target.innerText);

  let keyName = e.target.innerText;
  if (keyName == "work") {
    chrome.storage.sync.get("workLinks", ({ workLinks }) => {
      createTabs(workLinks);
    });
  } else if (keyName == "social") {
    chrome.storage.sync.get("socialLinks", ({ socialLinks }) => {
      createTabs(socialLinks);
    });
  }
}

function createTabs(links) {
  links.forEach((link) => {
    chrome.tabs.create({ url: link });
  });
}

function openEdit(e) {
  let currentKey = e.target.innerText
  chrome.storage.sync.set({currentKey});
  window.location.href = "./edit.html"
}

// Initialize the page by constructing the color options
constructOptions(page);

export { openEdit };
