
//button toggle for colour

const body = document.querySelector("body");
const resetButton = document.createElement("button");
const blackButton = document.createElement("button");
const rainbowButton = document.createElement("button");
const colorButtonContainers = document.createElement("div");
const gridDimensionVal = 800;
let blackPressed = false, rainbowPressed = false;

function blackTrue(){
    blackPressed = true;
    rainbowPressed = false;
}
function rainbowTrue(){
    blackPressed = false;
    rainbowPressed = true;
}

blackButton.addEventListener("click",() => blackTrue());
rainbowButton.addEventListener("click",() => rainbowTrue());
let randomR,randomG,randomB;
resetButton.textContent = "RESET GRID";
blackButton.textContent = "Black toggle";
rainbowButton.textContent = "Rainbow toggle";
resetButton.setAttribute("id","resetButton");
blackButton.setAttribute("id","blackButton");
rainbowButton.setAttribute("id","rainbowButton");
colorButtonContainers.setAttribute("id","colorButtonContainers");
body.appendChild(resetButton);
colorButtonContainers.appendChild(blackButton);
colorButtonContainers.appendChild(rainbowButton);
body.appendChild(colorButtonContainers);
let sqPerSide;
do{
sqPerSide = prompt("How many squares per side do you want the grid?"); //TO DO: ADD A FLOOR FUNCTION TO ROUND THIS TO AN INT OR WE ARE DOOMED not really but still it would be nice
}while(isNaN(sqPerSide))

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


gridContainer.style.width = `${gridDimensionVal}px`;
gridContainer.style.height = `${gridDimensionVal}px`;
// gridContainer.style.width = "800px"; //50px * 16
// gridContainer.style.height = "800px"; //50px * 16
gridContainer.style.boxShadow = "0px 0px 18px 0px #590000";
//hello

//alternatively if i wanted to keep the grid size consistent i could do
//set a grid dimension e.g. 800x800
//take number of grids per side
//number/800 = length for each grid
//boom, consistent grid size
function randomHex(){
    if(rainbowPressed){
    let returnVal = "#" + Math.floor(Math.random()*16777215).toString(16);
    return returnVal;
    }
    else{
        return "black";
    }
}


// function drawing(eventA){
//     if(blackPressed){
//         gridArray[i].addEventListener("mouseover", (e) =>  eventA.target.style.backgroundColor = "black");
//     }else{
//         gridArray[i].addEventListener("mouseover", (e) =>  eventA.target.style.backgroundColor = randomHex());
//     }
// }

//end 
body.appendChild(gridContainer);
for(i=0;i<totalGridNumber;i++){
    gridArray[i] = document.createElement("div");
    gridContainer.appendChild(gridArray[i]);
    gridArray[i].style.height = `${gridDimensionVal/sqPerSide}px`;
    gridArray[i].style.width = `${gridDimensionVal/sqPerSide}px`;
    //let random r,g,b
    //random values between 0-255 for each,
    //create a string where its rgb(r,g,b)
    //enter the string in place of the orange
    



    





    gridArray[i].addEventListener("mouseover", (e) =>  e.target.style.backgroundColor = randomHex()); //new
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

const refreshP = document.createElement("p");
refreshP.textContent = "Refresh the page to change the number of squares in the grid";
refreshP.style.position = "relative";
refreshP.style.bottom = "50vh";
body.appendChild(refreshP);