let links = ["https://github.com/login", "https://www.bbc.co.uk/"];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ links });
  console.log(`links defined`);
});
