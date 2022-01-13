let workKey = document.getElementById("workKey");
let socialKey = document.getElementById("socialKey");

workKey.addEventListener("click", openLinks);
socialKey.addEventListener("click", openLinks);

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
