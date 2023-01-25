let grid = 50;
let height = width = 510;
let fragment = document.createDocumentFragment();

function generateGrid(grid, fragment) {
    const etchContainer = document.querySelector('.etchContainer');
    
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

generateGrid(grid, fragment);
