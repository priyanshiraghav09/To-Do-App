const inputBox = document.getElementsById("input-box");
const listConatiner = document.getElementsById("list-container");

function addTask(){
    if (inputBox.value === '') {
            alert("You must write something!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = "";

}
