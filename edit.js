
let workKeyEdit = document.getElementById("workKeyEdit");
let socialKeyEdit = document.getElementById("socialKeyEdit");

workKeyEdit.addEventListener("click", addingUrl);
socialKeyEdit.addEventListener("click", addingUrl);

function addingUrl(ev) {
ev.preventDefault();

let id = ev.target.id;
  if (id == "workKeyEdit") {
    chrome.storage.sync.get("workLinks", ({ workLinks }) => {
    let input_url = document.getElementById("new_url").value;
    workLinks.push(input_url);
    chrome.storage.sync.set({workLinks});
    document.forms[0].reset();
});
} else if (id == "socialKeyEdit"){
    chrome.storage.sync.get("socialLinks", ({ socialLinks }) => {
    let input_url = document.getElementById("new_url").value;
    socialLinks.push(input_url);
    chrome.storage.sync.set({socialLinks});
    document.forms[0].reset();

});
  
}



}