const body1 = document.getElementById("main");
if(body1){
    body1.parentNode.removeChild(body1);
}

const newHeader = document.createElement("h1")
newHeader.setAttribute("id","victory")

newHeader.textContent= "YOUR-NAME is the champion";

document.body.appendChild(newHeader)

