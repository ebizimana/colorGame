// Elie Bizimana
// Created: 10/01/2018
// Updated: 10/02/2018

var colors = generateRandomColors(6);
var h1 = document.querySelector("h1")
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor;

// A loop to change the squares design.
for (var i = 0; i < squares.length; i++) {
  // Add initial colors to squares
  squares[i].style.backgroundColor = colors[i]
  //Add click listener to squares
  squares[i].addEventListener("click", function() {
    // grab color of clicked squares
    var clickedColor = this.style.backgroundColor
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor)
      h1.style.backgroundColor = clickedColor
    } else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again"
    }
  })
}

function changeColors(color) {
  // looop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random]
}

function generateRandomColors(num){
  // make an array
  var arr = []
  // add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor())

  }
  // returm that array
  return arr;
}

function randomColor(){
  // pick a "red from 0 - 255"
  var r = Math.floor(Math.random() * 256)
  // pick a "green from 0 - 255"
  var g = Math.floor(Math.random() * 256)
  // pick a "blue from 0 - 255"
  var b = Math.floor(Math.random() * 256)

  return "rgb(" + r + ", " + g + ", " + b + ")"
}
