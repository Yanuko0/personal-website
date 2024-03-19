let img = document.querySelector(".img");
let deg = 0;
let imgx = 0;
let imgy = 0;
let imgl = 0;
let imgt = 0;
let y = 0;
let index = 0;

window.addEventListener('mousemove', function(event) {
    let rect = img.getBoundingClientRect();
    imgx = event.clientX - rect.left - rect.width / 2;
    imgy = event.clientY - rect.top - rect.height / 2;
    deg = 360 * Math.atan(imgy / imgx) / (2 * Math.PI);
    index = 0;
    if (img.offsetLeft + rect.width / 2 < event.clientX) {
        y = -180;
    } else {
        y = 0;
    }
})

setInterval(() => {
    img.style.transform = "rotateZ(" + deg + "deg) rotateY(" + y + "deg)";
    index++;
    if (index < 50) {
        imgl += imgx / 50;
        imgt += imgy / 50;
    }
    img.style.left = imgl + "px";
    img.style.top = imgt + "px";
}, 10);
