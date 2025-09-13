const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// function to add task in li 
function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
    inputBox.value = "";
    saveData();
    }
// to add button characteristics of functioning on pressing enter 
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
        saveData();
        }
});
// to remove added task on pressing X
    listContainer.addEventListener("click", function(e){
          if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
            }
            else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                saveData();
        }
    }, false);
    // to save data in browser
    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();