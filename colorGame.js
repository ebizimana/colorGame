// Elie Bizimana
// Created: 10/01/2018
// Updated: 10/02/2018

var color = ["rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor;

// A loop to change the squares design.
for (var i = 0; i < squares.length; i++) {
  // Add initial colors to squares
  squares[i].style.backgroundColor = color[i]
  //Add click listener to squares
  squares[i].addEventListener("click", function() {
    // grab color of clicked squares
    var clickedColor = this.style.backgroundColor
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor)
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
  var random = Math.floor(Math.random() * color.length);
  return color[random]
}
