const height = width = 510;
let fragment = document.createDocumentFragment();
let slider = document.querySelector('.slider');
let grid = parseInt(slider.value);
const etchContainer = document.querySelector('.etchContainer');
const sliderValue = document.querySelector('span');
const inputSlider = document.querySelector('input.slider');

function generateGrid() {
    for (let i = 0; i < grid; i++) {        
        for (let j = 0; j < grid; j++) {
            let div = document.createElement('div');
            div.style.height = `${(height - (grid * 2))  / grid}px`;
            div.style.width = `${(height - (grid * 2))  / grid}px`;
            div.classList = 'square';
            div.onclick 
            fragment.appendChild(div);
        }
    }
    etchContainer.appendChild(fragment);
}

// Can swap 'change' event for an 'input' event to make grid size dynamically
slider.addEventListener('change', (e) => {
    clearGrid();
    grid = e.target.valueAsNumber;
    generateGrid();
});

function clearGrid() {
    const gridArray = Array.from(etchContainer.childNodes);
    gridArray.forEach((div) => {
        div.remove('div');
    })
};

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    sliderValue.textContent = value;
    console.log(value);
});

generateGrid();

