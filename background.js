let workLinks = ["https://github.com/login", "https://www.bbc.co.uk/"];

let socialLinks = [
  "https://www.whatsapp.com/",
  "https://www.signal.org/",
  "https://telegram.org/",
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ workLinks, socialLinks });
   console.log(`work links defined`);
 });
