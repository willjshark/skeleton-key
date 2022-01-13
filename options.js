let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetLinks = [
  "https://www.bbc.co.uk/",
  "https://www.bbc.co.uk/food/recipes",
  "https://www.thesaurus.com/",
  "https://github.com/login",
];

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
  currentKey = e.target.innerText
  chrome.storage.sync.set({currentKey});
  window.location.href = "./edit.html"
}

function constructOptions() {
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

// Initialize the page by constructing the color options
constructOptions();
