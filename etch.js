let height = width = 510;
let fragment = document.createDocumentFragment();
let slider = document.querySelector('.slider');
// let grid = parseInt(slider.value);
let grid = 25;
const etchContainer = document.querySelector('.etchContainer');
const button = document.querySelector('button');

function generateGrid(grid, fragment) {
    for (let i = 0; i < grid; i++) {        
        for (let j = 0; j < grid; j++) {
            let div = document.createElement('div');
            div.style.height = `${(height - (grid * 2))  / grid}px`;
            div.style.width = `${(height - (grid * 2))  / grid}px`;
            div.classList = 'square';
            fragment.appendChild(div);
        }
    }
    etchContainer.appendChild(fragment);
}

// Slider ready, need to implement clearGrid();
// slider.addEventListener('change', (e) => {
    
//     console.log(typeof e.target.valueAsNumber);
//     // clearGrid();
//     // generateGrid(grid, fragment);
// });

generateGrid(grid, fragment);

function clearGrid() {
    const gridArray = Array.from(etchContainer.childNodes);
    gridArray.forEach((div) => {
        div.remove('div');
    })
    
    return 'gridArray';
}

button.addEventListener('click', () => {
    clearGrid();
})

console.log(button);
console.log(etchContainer.childNodes);
console.log(Array.from(etchContainer.childNodes));

