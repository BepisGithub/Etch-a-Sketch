const body = document.querySelector("body");
let gridArray = [];
const totalGridNumber = 256;
const gridContainer = document.createElement("div");
gridContainer.id = "gridContainer";
body.appendChild(gridContainer);
for(i=0;i<256;i++){
    gridArray[i] = document.createElement("div");
    gridContainer.appendChild(gridArray[i]);
    console.log(i);
    console.log(gridArray[i]);
    gridArray[i].style.height = "50px";
    gridArray[i].style.width = "50px";
}

