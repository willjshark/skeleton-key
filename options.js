let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetLinks = [
  "https://www.bbc.co.uk/",
  "https://www.bbc.co.uk/food/recipes",
  "https://www.thesaurus.com/",
  "https://github.com/login",
];

// Reacts to a button click by marking the selected button and saving
// the selection
// function handleButtonClick(event) {
//   // Remove styling from the previously selected color
//   let current = event.target.parentElement.querySelector(
//     `.${selectedClassName}`
//   );
//   if (current && current !== event.target) {
//     current.classList.remove(selectedClassName);
//   }

//   // Mark the button as selected
//   let color = event.target.dataset.color;
//   event.target.classList.add(selectedClassName);
//   chrome.storage.sync.set({ color });
// }

// Add a button to the page for each supplied color
function constructOptions {
  chrome.storage.sync.get("keys", (data) => {
    let currentKeys = data.keys;
    console.log(currentKeys)
    // For each color we were provided…
    for (let key in currentKeys) {
      // …create a button with that color…
      let button = document.createElement("button");
      button.innerText = key[0]
      console.log(key)

      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

// Initialize the page by constructing the color options
constructOptions();
