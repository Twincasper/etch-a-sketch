const container = document.querySelector(".container");
const createGridBtn = document.querySelector("#createGrid");
const clearGridBtn = document.querySelector("#clearGrid");
const gridSizeInput = document.querySelector("#gridSize");

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);

      cell.addEventListener("mouseover", () => {
        if (!cell.style.backgroundColor) {
          const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
          cell.style.backgroundColor = randomColor;
        }
      });
    }
  }
}

createGridBtn.addEventListener("click", () => {
  const size = parseInt(gridSizeInput.value);
  if (size >= 1 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a size between 1 and 100");
  }
});

clearGridBtn.addEventListener("click", () => {
  container.innerHTML = "";
});

createGrid(parseInt(gridSizeInput.value));
