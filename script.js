let clear = document.querySelector(".clear");
let pick = document.querySelector("button");
let rgb = document.querySelector(".rgb");

//BLACK SQUARES
function sketch(size) {
  let grid = document.querySelector(".grid");
  let squares = grid.querySelectorAll("div");

  squares.forEach((div) => div.remove());
  size = prompt("Enter a number between 2 and 64");

  while (isNaN(size) || size < 2 || size > 64) {
    alert("Please enter a number between 2 and 64");
    size = prompt("Enter a number between 2 and 64");
  }

  grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.className = "square";

    square.addEventListener("mouseover", () => {
      square.style.background = "black";
    });

    grid.appendChild(square);
  }
}

//RGB SQUARES
function sketchRGB(size) {
  let grid = document.querySelector(".grid");
  let squares = grid.querySelectorAll("div");

  squares.forEach((div) => div.remove());
  size = prompt("Enter a number between 2 and 64");

  while (isNaN(size) || size < 2 || size > 64) {
    alert("Please enter a number between 2 and 64");
    size = prompt("Enter a number between 2 and 64");
  }

  grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.className = "square";

    square.addEventListener("mouseover", () => {
      square.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });

    grid.appendChild(square);
  }
}

//Event listener for picking a number
function chooseNumber() {
  pick.addEventListener("click", () => {
    sketch();
  });
}

function rgbButton() {
  rgb.addEventListener("click", () => {
    sketchRGB();
  });
}

chooseNumber();
rgbButton();
