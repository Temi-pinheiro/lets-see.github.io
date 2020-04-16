var numsquares=6;
var colors = [];
var pickedColor;
var squares= document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage= document.getElementById("displayMessage");
var h1= document.querySelector("h1");
var colorsReset= document.getElementById("reset");
var modeButtons= document.querySelectorAll(".mode");

init();

function init(){
  modeButtonsSetup();
  squareEventListener();
  reset();
}

function modeButtonsSetup(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numsquares= 3 : numsquares=6;
      reset();

    })
  }
}

function squareEventListener() {
  for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
    squares[i].addEventListener("click", function(){
      console.log(this.style.background);
      //grab color of clicked squares
      var clickedColor = this.style.background;
      //compare clciked color to picked color
      if(clickedColor === pickedColor){
        displayMessage.textContent= "Correct";
        colorsReset.textContent="Play Again?";
        changeColors(clickedColor);
        h1.style.background= clickedColor;
      }
      else {
        this.style.background= "black";
        displayMessage.textContent= "Wrong";
      }
    })
  }
}

function reset() {
  //generate all new colorsArray
  colors= generateRandomColors(numsquares);
  //pick a new random color from colorsArray
  pickedColor= pickRandom();
  //change color display to match picked color
  colorDisplay.textContent= pickedColor;
  //change colors of squares
  displayMessage.textContent="";
  colorsReset.textContent="NEW colors";
  for (var i = 0; i < squares.length; i++) {

    if (colors[i]) {
      squares[i].style.display="block";
      squares[i].style.background= colors[i];
    }
    else {
      squares[i].style.display="none";
    }
  }
  h1.style.background= "steelblue";
}

colorsReset.addEventListener("click", function(){

  reset();
})

colorDisplay.textContent = pickedColor;




//singular functions
function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background= color;
  }
}

function pickRandom(){
  var num=Math.floor(Math.random() * colors.length);
  return colors[num];
}

function generateRandomColors(num){
  //make an array
  var colorsArray= [];
  //add num random colors to array
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    colorsArray.push(randomColor())
  }
  //return that array
  return colorsArray;
}

function randomColor(){
   //pick a red from 0-255
   var red =Math.floor(Math.random() * 256);
   //pick a green from 0-255
   var green =Math.floor(Math.random() * 256);
   //pick a blue from 0-255
   var blue =Math.floor(Math.random() * 256);

   var clr= "rgb("+red + ", "+green +", "+blue+")";
   return clr;
}
