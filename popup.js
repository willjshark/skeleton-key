let workKey = document.getElementById("workKey");
let socialKey = document.getElementById("socialKey");

workKey.addEventListener("click", openLinks);
socialKey.addEventListener("click", openLinks);

function openLinks(e) {
  console.log(e.target.id);

  let id = e.target.id;
  if (id == "workKey") {
    chrome.storage.sync.get("workLinks", ({ workLinks }) => {
      createTabs(workLinks);
    });
  } else if (id == "socialKey") {
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
