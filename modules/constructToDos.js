function constructToDos(page) {
  chrome.storage.sync.get("todos", (data) => {
    let toDos = data.todos;
    console.log(toDos);
    // For each color we were provided…
    for (let todo in toDos) {
      // …create a button with that color…
      let todoItem = document.createElement("li");
      todoItem.innerText = toDos[todo];
      todoItem.id = todo;
      console.log(todo);
      

      //button.addEventListener("click", openEdit);

      page.appendChild(todoItem);
    }
  });
}


  export { constructToDos };