let link = "https://github.com/login";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ link });
  console.log(`Default url set to ${link}`);
});
