const body = document.querySelector("body");
const resetButton = document.createElement("button");
resetButton.textContent = "RESET GRID";
body.appendChild(resetButton);
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
    gridArray[i].style.height = "50px";
    gridArray[i].style.width = "50px";
    gridArray[i].addEventListener("mouseover", (e) =>  e.target.style.backgroundColor = "green"); //new
    // gridArray[i].addEventListener("click", (e) => e.target.style.backgroundColor = "pink"); //new
}


//// gridArray[1].addEventListener("click", gridArray[i].setAttribute("style", "background-color: red")


//I FOUND THE ISSUE. THE EVENT LISTENER IS SET UP ALWAYS BUT IN THE FUNCTION THAT IT CALLS IT STILL USES GRIDARRAY[I] BUT THE I GETS DESTROYED AS SOON AS WE LEAVE THE FOR LOOP
//THIS MEANS WE NEED TO FIND SOME WAY TO SET THE EVENT LISTENER TO call a function that adjusts BG colour without the use of I... lol

//myb set the id of each div to something done

//use the id
//gridArray[i].setAttribute("id",`container${i}`);

function reset(){
    for(i=0;i<gridArray.length;i++)
    {
        gridArray[i].style.backgroundColor = "white";
    }
}
resetButton.addEventListener("click",() => reset() );