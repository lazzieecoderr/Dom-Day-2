const button = document.createElement("button");
const span = document.createElement("span");
button.setAttribute("type", "button");
button.id = "btn";
button.classList.add("btn", "btn-success");
button.innerText = "Click here";
document.body.append(button, span);
button.addEventListener("click",foo);
function foo(){
    const element = prompt("Enter Your Name");
    span.innerHTML = `<b>${element}</b>`
}