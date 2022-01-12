let workKey = document.getElementById("workKey");

workKey.addEventListener("click", openTwoLinks);

function openTwoLinks() {
  console.log("hello");
  chrome.storage.sync.get("links", ({ links }) => {
    links.forEach((link) => {
      chrome.tabs.create({ url: link });
    });
  });
}
