let newKeyBtn = document.getElementById("submitKey");
let newKeyname = document.getElementById("new_key_name");

newKeyBtn.addEventListener("click", addKey);

function addKey(e) {
  e.preventDefault();

  let name = newKeyname.value;
  console.log(name);

  chrome.storage.sync.get("keys", ({ keys }) => {
    keys[name] = [];
    chrome.storage.sync.set({ keys });
    document.forms[0].reset();
  });
  window.location.href = "../pages/options.html";
}
