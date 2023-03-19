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

let pedicure1 = document.getElementById('pedicure1')
let pedicure2 = document.getElementById('pedicure2')
let pedicure3 = document.getElementById('pedicure3')

let paragraph = document.querySelector('.teste')

pedicure1.addEventListener('click', procedimentos1)
pedicure2.addEventListener('click', procedimentos2)
pedicure3.addEventListener('click', procedimentos3)



function procedimentos1() {
    paragraph.style.transform="translateX(0)"
    paragraph.style.transition="1.5s ease"
    pedicure1.style.color="#000"
    pedicure2.style.color="#9600AE"
    pedicure3.style.color="#9600AE"
}

function procedimentos2() {
    paragraph.style.transform="translateX(-530px)"
    paragraph.style.transition="1.5s ease"
    pedicure1.style.color="#9600AE"
    pedicure2.style.color="#000"
    pedicure3.style.color="#9600AE"
    
}

function procedimentos3() {
    paragraph.style.transform="translateX(-1060px)"
    paragraph.style.transition="1.5s ease"
    pedicure1.style.color="#9600AE"
    pedicure2.style.color="#9600AE"
    pedicure3.style.color="#000"
}










// ************************* //


window.sr =ScrollReveal({ reset: true});

sr.reveal("#home", {
    origin: "top",
    distance: "20px",
    duration: 1000,
    reset: false
})

sr.reveal("#titulo", {
    origin: "top",
    distance: "10px",
    duration: 2000,
    delay: 300
})
sr.reveal(".aSeta", {
    origin: "top",
    distance: "10px",
    duration: 2000,
    delay: 600
    
})

sr.reveal(".ulTitle", {
    origin: "top",
    distance: "10px",
    duration: 2000,
    delay: 900
})

sr.reveal(".galeria", {
    duration: 1000,
})

sr.reveal("#slider1", {
    origin: "left",
    distance: "100px",
    duration: 3000
})

sr.reveal("#slider2", {
    origin: "left",
    distance: "100px",
    duration: 2000
})

sr.reveal(".lado-direito", {
    origin: "top",
    distance: "100px",
    duration: 1500,
    delay: 900
})