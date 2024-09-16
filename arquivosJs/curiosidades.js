function hideModal() {
    const modal = document.getElementById("modal")
    modal.style.visibility = "hidden"
}
const modal = document.getElementById('modal')

modal.addEventListener('click', hideModal)

content1 = () => {
    const modal = document.getElementById('modal')
    modal.style.visibility = "visible"
}

const button1 = document.getElementById("button1")

button1.addEventListener('click', content1)



function hideModal2() {
    const modal2 = document.getElementById("modal2")
    modal2.style.visibility = "hidden"
}
const modal2 = document.getElementById('modal2')

modal2.addEventListener('click', hideModal2)

content2 = () => {
    const modal2 = document.getElementById('modal2')
    modal2.style.visibility = "visible"
}

const button2 = document.getElementById("button2")

button2.addEventListener('click', content2)



function hideModal3() {
    const modal3 = document.getElementById("modal3")
    modal3.style.visibility = "hidden"
}
const modal3 = document.getElementById('modal3')

modal3.addEventListener('click', hideModal3)

content3 = () => {
    const modal3 = document.getElementById('modal3')
    modal3.style.visibility = "visible"
}

const button3 = document.getElementById("button3")

button3.addEventListener('click', content3)



function hideModal4() {
    const modal4 = document.getElementById("modal4")
    modal4.style.visibility = "hidden"
}

const modal4 = document.getElementById("modal4")

modal4.addEventListener('click', hideModal4)

content4 = () => {
    const modal4 = document.getElementById('modal4')
    modal4.style.visibility = "visible"
}

const button4 = document.getElementById("button4")

button4.addEventListener('click', content4)



function hideModal5() {
    const modal5 = document.getElementById("modal5")
    modal5.style.visibility = "hidden"
}

const modal5 = document.getElementById('modal5')
modal5.addEventListener('click', hideModal5)

content5 =  () => {
    const modal5 = document.getElementById('modal5')
    modal5.style.visibility = "visible"
}

const button5 = document.getElementById("button5")
button5.addEventListener('click', content5)



function hideModal6() {
    const modal6 = document.getElementById("modal6")
    modal6.style.visibility = "hidden"
}

const modal6 = document.getElementById('modal6')
modal6.addEventListener('click', hideModal6)

content6 = () => {
    const modal6 = document.getElementById("modal6")
    modal6.style.visibility = "visible"    
}

const button6 = document.getElementById('button6')
button6.addEventListener('click', content6)


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
