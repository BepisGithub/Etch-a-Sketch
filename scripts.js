const body = document.querySelector("body");
let gridArray = [];
const totalGridNumber = 256;
for(i=0;i<256;i++){
    gridArray[i] = document.createElement("div");
    body.appendChild(gridArray[i]);
    console.log(i);
    console.log(gridArray[i]);
    gridArray[i].style.height = "50px";
    gridArray[i].style.width = "50px";
}

