
// Add and Delete Items
function addItem() {
    let input = document.getElementById("new-task");
    let text = input.value;
    let newLi = document.createElement("li");
    newLi.className = input.value
    newLi.onclick = doneTask;
    newLi.textContent = text + " ";

    let deleteLink = document.createElement("a");
    deleteLink.textContent = " X ";
    deleteLink.href = "#";
    deleteLink.addEventListener("click", deleteItem);
    newLi.appendChild(deleteLink);

    document.getElementById("task-items").appendChild(newLi);
    input.value = "";

    function deleteItem() {
        document.getElementById("task-items").removeChild(newLi);
    }

 
    let counter = document.getElementById("taskCounter");
    let addCount = parseInt(counter.innerHTML) + 1;
    counter.innerHTML = addCount;
}

    
function doneTask(){
    git1
    let checker = document.getElementsByClassName(this.className)[0].classList.contains('checked');

    if (checker) {
        document.getElementsByClassName(this.className)[0].classList.remove('checked')
    } else {
        document.getElementsByClassName(this.className)[0].classList.add('checked')
    }
} 
 






