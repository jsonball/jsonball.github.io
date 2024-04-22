let id = 0
const images = document.querySelectorAll(".slideshow img")
function slideshowUpdate() {
    images.forEach((image, index) => {
        if (index != id) {
        image.style.display = "none"
        } else {
            image.style.display = "block"
        }
    })
    console.log(id)
}
slideshowUpdate()
document.querySelector("#back")
.addEventListener("click", ()=> {
    if (id > 0) {
        id--
    }
    else {
        id = images.length -1
    }
    console.log(images.length)
    slideshowUpdate()
})
document.querySelector("#next")
.addEventListener("click", ()=> {
    if (id < images.length -1) {
        id++
    }
    else {
        id = 0
    }
    slideshowUpdate()
})
