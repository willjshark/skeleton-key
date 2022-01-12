let new_url = document.getElementById("new_url");

new_url.addEventListener("click", addingUrl);

function addingUrl() {
chrome.storage.sync.get("workLinks", ({ workLinks }) => {
    console.log(workLinks)
    workLinks.push("https://en-gb.facebook.com/")
    console.log(workLinks)
   chrome.storage.sync.set({workLinks});
   console.log(workLinks)
  });
}



 