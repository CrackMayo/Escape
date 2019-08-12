let secciones = [];
let botones = [];
let cartas = [];
window.onload = init;

function init() {
    secciones[1] = document.getElementById("pantallaPrincipal_1");
    secciones[2] = document.getElementById("empezar_2");
    secciones[3] = document.getElementById("comoJugar_3");
    secciones[4] = document.getElementById("historia_4");
    secciones[5] = document.getElementById("info_5");
    var song = document.getElementById("soundTrack");
    song.volume = 0.05;
    cartas[0] = "Castillo";
    cartas[1] = "Espada";
    cartas[2] = "Pergamino";
}

function ocultar() {
    for (let i = 1; i < secciones.length; i++) {
        secciones[i].classList.add("ocultar");
    }
}

function cambiarSeccion(target) {
    let id = target.id.split("_")[1];
    ocultar();
    secciones[id].classList.remove("ocultar");
}

function volverPrincipal() {
    ocultar();
    secciones[1].classList.remove("ocultar");
}

function StartOrStop(estado) {
    var audio = document.getElementById("soundTrack")
    if(estado)
        audio.play();
    else
        audio.pause();
    
}
