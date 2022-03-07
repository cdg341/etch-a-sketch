let clear = document.querySelector(".clear");

//Get grid size from user input
function populateBoard(size) {
  let grid = document.querySelector(".grid");
  let squares = grid.querySelectorAll("div");

  squares.forEach((div) => div.remove());

  size = prompt("Enter a number between 2 and 64");

  while (size < 2 || size > 64) {
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

//Clear the board
function reset() {
  clear.addEventListener("mousedown", () => {
    populateBoard();
  });
}

populateBoard();
reset();
