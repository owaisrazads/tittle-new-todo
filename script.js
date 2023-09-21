// JavaScript (script.js)
function addItem() {
    const title = document.getElementById("title").value;
    const newItem = document.getElementById("new").value;

    if (title && newItem) {
        const itemList = document.getElementById("itemList");
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML = `<h3>Title: ${title}</h3><p>New: ${newItem}</p><button class="edit-btn" onclick="editItem(this)">Edit</button><button class="delete-btn" onclick="deleteItem(this)">Delete</button>`;
        itemList.appendChild(itemDiv);

        // Clear input fields
        document.getElementById("title").value = "";
        document.getElementById("new").value = "";
    }
}

function editItem(button) {
    const itemDiv = button.parentElement;
    const title = itemDiv.querySelector("h3");
    const newItem = itemDiv.querySelector("p");
    
    const newTitle = prompt("Edit Title:", title.innerText.replace("Title: ", ""));
    const newNew = prompt("Edit New:", newItem.innerText.replace("New: ", ""));

    if (newTitle && newNew) {
        title.innerText = `Title: ${newTitle}`;
        newItem.innerText = `New: ${newNew}`;
    }
}

function deleteItem(button) {
    const itemDiv = button.parentElement;
    itemDiv.remove();
}