const body = document.querySelector("body");
let gridArray = [];
const totalGridNumber = 256;
const gridContainer = document.createElement("div");
gridContainer.id = "gridContainer";



// gridContainer.style.width = "800px"; //50px * 16
// gridContainer.style.height = "800px"; //50px * 16


//end 
body.appendChild(gridContainer);
for(i=0;i<256;i++){
    gridArray[i] = document.createElement("div");
    gridContainer.appendChild(gridArray[i]);
    //temp
    gridArray[i].style.border = "solid 1px black";
    // end temp
    gridArray[i].style.height = "50px";
    gridArray[i].style.width = "50px";
    gridArray[i].addEventListener("click", () => gridArray[i].); //new
    //i think i need to create a spare var to do thje following:
    // gridArray[i] = tempVar;
    // tempVar.addEventListener("click, () => tempVar.addClass")
}
