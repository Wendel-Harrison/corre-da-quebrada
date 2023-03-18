let buttonFrente = document.getElementById('btnJs2')
let buttonTras = document.getElementById('btnJs1')

let article = document.getElementById('slider2')

buttonFrente.addEventListener('click', moverSlideFrente)
buttonFrente.addEventListener('click', aparecerBotao)
buttonFrente.addEventListener('click', sumirBotaoFrente)


buttonTras.addEventListener('click', moverSlideTras)
buttonTras.addEventListener('click', sumirBotao)
buttonTras.addEventListener('click', aparecerBotaoFrente)




function moverSlideFrente() {
    article.style.position="relative"
    article.style.transform="translateX(-589px)"
    article.style.transition="1.5s ease"
}

function moverSlideTras() {
    article.style.position="relative"
    article.style.transform="translateX(0)"
    article.style.transition="1.5s ease"
}

function aparecerBotao() {
    buttonTras.style.opacity="1"
    buttonTras.style.transition="1s ease"
}

function sumirBotao() {
    buttonTras.style.opacity="0"
    buttonTras.style.transition="1s ease"
}

function sumirBotaoFrente() {
    buttonFrente.style.opacity="0"
    buttonFrente.style.transition="1s ease"
}

function aparecerBotaoFrente() {
    buttonFrente.style.opacity="1"
    buttonFrente.style.transition="1s ease"
}