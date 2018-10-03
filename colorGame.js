// Elie Bizimana
// Created: 10/01/2018
// Updated: 10/03/2018

var numSquares = 6
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1")
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
  // show that easy mode is selected
  hardBtn.classList.remove("selected")
  easyBtn.classList.add("selected")
  // generate only three colors
  numSquares = 3
  colors = generateRandomColors(numSquares)
  // pick a new color
  pickedColor = pickColor();
  // update the color display the match the new color
  colorDisplay.textContent = pickedColor
  // show only three colors
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i]
    } else {
      // hide the rest of the colors
      squares[i].style.display = "none"
    }
  }
})

hardBtn.addEventListener("click", function() {
  // show that the hard mode is selected
  hardBtn.classList.add("selected")
  easyBtn.classList.remove("selected")
  // generate only three colors
  numSquares = 6
  colors = generateRandomColors(numSquares)
  // pick a new color
  pickedColor = pickColor();
  // update the color display the match the new color
  colorDisplay.textContent = pickedColor
  // show only three colors
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
    // show all the colors
    squares[i].style.display = "block"
  }
})

resetButton.addEventListener("click", function() {
  // generate random colors
  colors = generateRandomColors(numSquares)
  // pick a color to guess
  pickedColor = pickColor();
  // change the color Display
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New Colors"
  // fill all the squares with colors
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
  }
  h1.style.backgroundColor = "steelblue"
})

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
      resetButton.textContent = "Play Again?"
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

function generateRandomColors(num) {
  // make an array
  var arr = []
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor())

  }
  // returm that array
  return arr;
}

function randomColor() {
  // pick a "red from 0 - 255"
  var r = Math.floor(Math.random() * 256)
  // pick a "green from 0 - 255"
  var g = Math.floor(Math.random() * 256)
  // pick a "blue from 0 - 255"
  var b = Math.floor(Math.random() * 256)

  return "rgb(" + r + ", " + g + ", " + b + ")"
}
