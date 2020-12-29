//creating elements to add
const body = document.querySelector("body");
const resetButton = document.createElement("button");
const blackButton = document.createElement("button");
const rainbowButton = document.createElement("button");
const colorButtonContainers = document.createElement("div");
let gridDimensionVal = 800; //setting the number val to set the grid and divide by for the size of the squares
let blackPressed = false, rainbowPressed = false;

function blackTrue(){ //these functions set the values to use for deciding the colour of the cursor hover effect
    blackPressed = true;
    rainbowPressed = false;
}
function rainbowTrue(){
    blackPressed = false;
    rainbowPressed = true;
}
//new
//more elements being created and added
blackButton.addEventListener("click",() => blackTrue());
rainbowButton.addEventListener("click",() => rainbowTrue());
let randomR,randomG,randomB;
resetButton.textContent = "RESET GRID";
blackButton.textContent = "Black colour";
rainbowButton.textContent = "Rainbow colour";
resetButton.setAttribute("id","resetButton");
blackButton.setAttribute("id","blackButton");
rainbowButton.setAttribute("id","rainbowButton");
colorButtonContainers.setAttribute("id","colorButtonContainers");
//appending them to the body
body.appendChild(resetButton);
colorButtonContainers.appendChild(blackButton);
colorButtonContainers.appendChild(rainbowButton);
body.appendChild(colorButtonContainers);

let sqPerSide; // input value stored here
do{ //runs the loop at least once
sqPerSide = prompt("How many squares per side do you want the grid?"); 
}while(isNaN(sqPerSide)) //make sure they have entered a valid input
if(sqPerSide<1){
    alert("You have entered a number less than 1");
    sqPerSide = 1;
}else if(sqPerSide>100){
    alert("You have entered a number greater than 100");
    sqPerSide = 100;
}else{
    //do nothing
}
gridDimensionVal = Math.floor((gridDimensionVal/sqPerSide))*sqPerSide;
console.log(gridDimensionVal); //This ensures that when a number e.g. 11 is given, the result may be too long of a decimal to
//use as the value when doing gridArray[i].style.height = `${(gridDimensionVal/sqPerSide)}px`;
//the decimal wiill be truncated so otherwise the grid would end up having weird whitespaces. THis line fixes that by dynamically adjusting the grid
//slightly so that all the square divs inside will fit properly with no whitespace


//creating an array to store all the grids
let gridArray = [];
const totalGridNumber = sqPerSide**2; //deciding the number of grids in total
const gridContainer = document.createElement("div"); //container for the divs
gridContainer.id = "gridContainer";


gridContainer.style.width = `${gridDimensionVal}px`; //800px, using the value declared earlier
gridContainer.style.height = `${gridDimensionVal}px`;
gridContainer.style.boxShadow = "0px 0px 18px 0px #590000"; //red box shadow

function randomHex(){ //function to decide the colour. if the rainbow button is pressed then 
    if(rainbowPressed){
    let returnVal = "#" + Math.floor(Math.random()*16777215).toString(16); //randomly generate a colour, add a # to it to make a random hex number
    return returnVal;
    }
    else{
        return "black"; //otherwise return the colour black
    }
}


body.appendChild(gridContainer);
for(i=0;i<totalGridNumber;i++){ //creating the number of divs needed
    gridArray[i] = document.createElement("div"); //creation
    gridContainer.appendChild(gridArray[i]); //appending it
    //setting dimensions
    gridArray[i].style.height = `${(gridDimensionVal/sqPerSide)}px`;
    gridArray[i].style.width = `${gridDimensionVal/sqPerSide}px`;
    gridArray[i].addEventListener("mouseover", (e) =>  e.target.style.backgroundColor = randomHex()); //when each one is hovered over, the event target (the div)'s background 
    //color is set by using the randomHex function to get a colour depending on which colour button has been pressed
}



function reset(){ //reset function for the reset button
    for(i=0;i<gridArray.length;i++) //iterates through each grid and sets the background colour to white
    {
        gridArray[i].style.backgroundColor = "white";
    }
}
resetButton.addEventListener("click",() => reset() ); //event listener for the reset button

//added a p to append indicating what the user should do if they want a new number of squares in the grid
const refreshP = document.createElement("p");
refreshP.textContent = "Refresh the page to change the number of squares in the grid";
//moving it up to make it more visible
refreshP.style.position = "relative";
refreshP.style.top = "50vh";
body.appendChild(refreshP);