let count = 1;
document.getElementById("radio1").checked = true

setInterval(function () {
    nextImage();
}, 4000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true
}

function hideInfo() {
    const info = document.getElementById("info")
    info.style.visibility = "hidden"
}
const info = document.getElementById('info')

info.addEventListener('click', hideInfo)

infoContent = () => {
    const info = document.getElementById('info')
    info.style.visibility = "visible"
}

const buttonVideo = document.getElementById("button-video")

buttonVideo.addEventListener('click', infoContent)


function hideInfo1() {
    const info1 = document.getElementById("info1")
    info1.style.visibility = "hidden"
}
const info1 = document.getElementById('info1')

info1.addEventListener('click', hideInfo1)

infoContent1 = () => {
    const info1 = document.getElementById('info1')
    info1.style.visibility = "visible"
}

const buttonVideo1 = document.getElementById("button-video1")

buttonVideo1.addEventListener('click', infoContent1)


function hideInfo2() {
    const info2 = document.getElementById("info2")
    info2.style.visibility = "hidden"
}
const info2 = document.getElementById('info2')

info2.addEventListener('click', hideInfo2)

infoContent2 = () => {
    const info2 = document.getElementById('info2')
    info2.style.visibility = "visible"
}

const buttonVideo2 = document.getElementById("button-video2")

buttonVideo2.addEventListener('click', infoContent2)


function hideInfo3() {
    const info3 = document.getElementById("info3")
    info3.style.visibility = "hidden"
}
const info3 = document.getElementById('info3')

info3.addEventListener('click', hideInfo3)

infoContent3 = () => {
    const info3 = document.getElementById('info3')
    info3.style.visibility = "visible"
}

const buttonVideo3 = document.getElementById("button-video3")

buttonVideo3.addEventListener('click', infoContent3)

function hamburger() {
    const btnmenu = document.getElementById('btn-menu')
    btnmenu.classList.toggle('ativar')
}

const btnmenu = document.getElementById('btn-menu')

function menuMobile() {
const menu = document.getElementById('menu-mobile')

    menu.classList.toggle('active')
}

btnmenu.addEventListener('click', menuMobile)




