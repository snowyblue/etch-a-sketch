const container = document.querySelector('.container .content');
const resetButton = document.querySelector('.btnReset');
const size = 30
const selectedColor = "silver"

let mouseDown = false
let mouseHover = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function color() {
    if (mouseDown) {
        this.style.backgroundColor = selectedColor
    } else {
        const pixels = document.querySelectorAll('.pixelBox');
        pixels.forEach((pixel) => {
            pixel.style.setProperty('--pixel-background-color', `${selectedColor}`)
        })
    }
}

function reset() {
    const pixels = document.querySelectorAll('.pixelBox');
    pixels.forEach(pixel => {pixel.style.backgroundColor = ''});
    console.log('reset');
}

for (let i = 1; i <= size*size; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixelBox');
    pixel.style.width = `${30/size}rem`
    pixel.style.height = `${30/size}rem`
    pixel.addEventListener('mouseover', color);
    pixel.addEventListener('mousedown', color);
    container.appendChild(pixel)
}

resetButton.addEventListener('mousedown', reset)

// pixels.forEach(pixel => pixel.addEventListener('mouseover', color));