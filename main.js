let box = document.querySelector('#box')
let btn = document.querySelector('#btn')

let autoColorChange = () => {
    let R = Math.floor(Math.random() * 256)
    let G = Math.floor(Math.random() * 256)
    let B = Math.floor(Math.random() * 256)

    return box.style.backgroundColor = `rgb(${R},${G},${B})`

}

setInterval(() => autoColorChange(), 5000)

btn.addEventListener('click', autoColorChange);