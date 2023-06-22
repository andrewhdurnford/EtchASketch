let gridsize = 15;
let container = document.createElement("div");
let reset = document.querySelector("#reset");
let changeSize = document.querySelector("#changeSize");
container.classList.add("container");
container.style.setProperty("--gridsize", gridsize);
const divs = document.getElementsByTagName("div");

reset.addEventListener("click", function () {
  for (div of divs) {
    div.style.backgroundColor = "white";
  }
});

changeSize.addEventListener("click", function () {
  let newSize = prompt("Enter desired grid size (max 100)");
  if (newSize) {
    gridsize = Math.min(parseInt(newSize), 100);
    for (div of divs) {
      div.style.backgroundColor = "white";
    }
    while (container.firstChild) container.removeChild(container.firstChild);
    gridMaker(gridsize);
  }
});

function gridMaker(gridsize) {
  let squareSize = 800 / gridsize;
  for (let i = 0; i < gridsize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridsize; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", "pixel");
      square.style.width = squareSize + "px";
      square.style.height = squareSize + "px";
      square.textContent = " ";
      row.appendChild(square);

      square.addEventListener("mouseover", function () {
        square.style.backgroundColor = "black";
      });
    }

    container.appendChild(row);
  }

  document.body.appendChild(container);
}

gridMaker(gridsize);
