const height = width = 510;
let fragment = document.createDocumentFragment();
let slider = document.querySelector('.slider');
let grid = parseInt(slider.value);
const etchContainer = document.querySelector('.etchContainer');
const sliderValue = document.querySelector('.slideNum');
const inputSlider = document.querySelector('input.slider');
const color = document.querySelector('input[type=color]');
const trash = document.querySelector('.trash');
const eraser = document.querySelector('.eraser');
let isDragging = false;


function generateGrid() {
    for (let i = 0; i < grid; i++) {        
        for (let j = 0; j < grid; j++) {
            let div = document.createElement('div');
            div.style.height = `${(height - (grid * 2))  / grid}px`;
            div.style.width = `${(height - (grid * 2))  / grid}px`;
            div.classList = 'square';
            // div.onmousedown = function() { changeColor(this) };
            div.addEventListener('mousedown', (e) => {
                isDragging = true;
                e.target.style.backgroundColor = color.value;
            })
            
            div.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    e.target.style.backgroundColor = color.value;    
                }
            })
            
            div.addEventListener('mouseup', (e) => {
                isDragging = false;
            })
            
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
    // FOLLOW UP ON THIS
    sliderValue.style.left = (value * 2)+ '%';
    sliderValue.classList.add("show");
});
inputSlider.onmouseup = (()=> {
    sliderValue.classList.remove("show");
});

eraser.addEventListener('click', () => {
    color.value = '#FFFFFF';
})

trash.addEventListener('click', () => {
    const gridArray = Array.from(etchContainer.childNodes);
    gridArray.forEach((div) => {
        div.style.backgroundColor = '';
    })
});

function changeColor(element) {
    element.style.backgroundColor = color.value;
}

generateGrid();