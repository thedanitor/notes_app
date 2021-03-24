const addBtn = document.getElementById("add");

// listen for click on add button to call addNewNote
addBtn.addEventListener("click", () => addNewNote());

// takes optional text parameter. Will be blank by default
function addNewNote(text = "") {
  // create div
  const note = document.createElement("div");
  // add class note
  note.classList.add("note");
  // if text parameter has text, give hidden class to textarea, otherwise give hidden class to div
  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;
    // get variables from note
    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    // inside textArea is text
    textArea.value = text;
    // inside main is text parsed in markdown
    main.innerHTML = marked(text);

    // listen for click on delete button to remove note from DOM
    deleteBtn.addEventListener("click", () => {
        note.remove()
    })
    // listen for click on edit button to toggle hidden class between main, textarea
    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })
    // listen for input on textArea
    textArea.addEventListener("input", (e) => {
        // destructure target to get value
        const { value } = e.target
        // inside main is value parsed in markdown
        main.innerHTML = marked(value);
    })
    // append note to body (DOM)
    document.body.appendChild(note);
}
