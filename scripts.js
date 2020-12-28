const body = document.querySelector("body");
const resetButton = document.createElement("button");
resetButton.textContent = "RESET GRID";
body.appendChild(resetButton);
let sqPerSide = prompt("How many squares per side do you want the grid?"); //TO DO: ADD A FLOOR FUNCTION TO ROUND THIS TO AN INT OR WE ARE DOOMED not really but still it would be nice
if(sqPerSide<1){
    alert("You have entered a number less than 1");
    sqPerSide = 1;
}else if(sqPerSide>100){
    alert("You have entered a number greater than 100");
    sqPerSide = 100;
}else{
    //
}
let gridArray = [];
const totalGridNumber = sqPerSide**2;
const gridContainer = document.createElement("div");
gridContainer.id = "gridContainer";


gridContainer.style.width = `${50*sqPerSide}px`;
gridContainer.style.height = `${50*sqPerSide}px`;
// gridContainer.style.width = "800px"; //50px * 16
// gridContainer.style.height = "800px"; //50px * 16

//alternatively if i wanted to keep the grid size consistent i could do
//set a grid dimension e.g. 960x960
//take number of grids per side
//number/960 = length for each grid
//boom, consistent grid size


//end 
body.appendChild(gridContainer);
for(i=0;i<totalGridNumber;i++){
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