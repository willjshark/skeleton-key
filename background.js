let workLinks = ["https://github.com/login", "https://www.bbc.co.uk/"];

let socialLinks = [
  "https://www.whatsapp.com/",
  "https://www.signal.org/",
  "https://telegram.org/",
];

let keys = { work: workLinks, social: socialLinks };
let todos = ["finish coding todos", "style skeleton-key extension"];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ keys });
  console.log(`work links defined`);
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ todos });
  console.log(`todos created`);
});
