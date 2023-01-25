let height = width = 510;
let fragment = document.createDocumentFragment();
let slider = document.querySelector('.slider');
let grid = parseInt(slider.value);
const etchContainer = document.querySelector('.etchContainer');

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

// generateGrid(grid, fragment);
// console.log(etchContainer);
// console.log(Array.from(etchContainer.childNodes));
