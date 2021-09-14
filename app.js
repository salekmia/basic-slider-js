const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg'
]
let imgIndex = 0
setInterval(() => {
    const url = images[imgIndex]
    const slider = document.getElementById('slider-img')
    slider.setAttribute('src', url)
    imgIndex++
    if(imgIndex >= images.length) {
        imgIndex = 0
    }
}, 1000)

// Thanks for Watching this video