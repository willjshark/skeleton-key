let button_press = document.getElementById("btn");

button_press.addEventListener("click", addingUrl);

function addingUrl(ev) {
ev.preventDefault();
chrome.storage.sync.get("workLinks", ({ workLinks }) => {
    let input_url = document.getElementById("new_url").value;

    workLinks.push(input_url);
    
   chrome.storage.sync.set({workLinks});
   document.forms[0].reset();
  });
}



 