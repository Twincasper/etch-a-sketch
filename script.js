const container = document.querySelector('.container');
const createGrid = document.querySelector('#createGrid')
const clearGrid = document.querySelector('#clearGrid');
const gridSize = document.querySelector('.grid-size');

let rows = 16;
let cols = 16;

for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'pink';
        });
    }
}

