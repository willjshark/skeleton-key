let openLink = document.getElementById("openLink");

chrome.storage.sync.get("link", ({ link }) => {
  openLink.href = link;
});
