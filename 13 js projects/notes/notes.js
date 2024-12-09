const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes =  document.querySelectorAll(".input-box");

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let span = document.createElement("span");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    notescontainer.appendChild(inputBox).appendChild(span);
})