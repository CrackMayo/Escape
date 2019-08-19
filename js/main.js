let secciones = [];
let botones = [];
let cartas = [];
let baraja = [];
let puntajeJugador = 0;
let puntajeGuardian = 0;
let score = document.getElementById("score");
let mensaje = document.getElementById("mensaje");
window.onload = init;
let cartasAleatorias = [];
let instruccionesVistas = false;

function init() {
    secciones[1] = document.getElementById("pantallaPrincipal_1");
    secciones[2] = document.getElementById("empezar_2");
    secciones[3] = document.getElementById("comoJugar_3");
    secciones[4] = document.getElementById("historia_4");
    secciones[5] = document.getElementById("info_5");
    secciones[6] = document.getElementById("resultado_6");
    var song = document.getElementById("soundTrack");
    song.volume = 0.05;
    cartas[0] = "Castillo";
    cartas[1] = "Espada";
    cartas[2] = "Pergamino";
    baraja[0] = document.getElementById("cartaCastillo");
    baraja[1] = document.getElementById("cartaEspada");
    baraja[2] = document.getElementById("cartaPergamino");
    cartasAleatorias[0] = document.getElementById("cartaAleatoriaIzquierda");
    cartasAleatorias[1] = document.getElementById("cartaAleatoriaCentro")
    cartasAleatorias[2] = document.getElementById("cartaAleatoriaDerecha")

}

function ocultar() {
    for (let i = 1; i < secciones.length; i++) {
        secciones[i].classList.add("ocultar");
    }
}

function cambiarSeccion(target) {
    let id = target.id.split("_")[1];
    ocultar();
    if (instruccionesVistas === false && id === "2") {
        secciones[4].classList.remove("ocultar");
        instruccionesVistas = true;
        setTimeout(function () {
            volverJuego();

        }, 12000);



    } else {
        secciones[id].classList.remove("ocultar");
    }

}

function volverPrincipal() {
    ocultar();
    secciones[1].classList.remove("ocultar");
}
function volverJuego() {
    ocultar();
    secciones[2].classList.remove("ocultar");
}

function StartOrStop(estado) {
    var audio = document.getElementById("soundTrack")
    if (estado.id === "btnSonido2") {
        estado.src = "img/btnSonidoOn.png";
        estado.id = "btnSonido1"
        audio.play();
    } else {
        estado.src = "img/btnSonidoOff.png";
        estado.id = "btnSonido2"
        audio.pause();
    }



}


function posicionAleatoria() {
    
    var posicionCarta = Math.floor(Math.random() * (cartasAleatorias.length));
    var posicion = cartasAleatorias[posicionCarta]
    return posicion;
}

function cartaAleatoria() {
    
    var aleatorio = Math.floor(Math.random() * (baraja.length));
    var carta = baraja[aleatorio]
    return carta;
}

function batalla(cartaJugador) {
    var cartaSoldado = cartaAleatoria();
    mostrarCarta(cartaSoldado);
    let nombreCartaJugador = cartaJugador.id;
    let id;
    if (nombreCartaJugador === "cartaCastillo") {
        id = 0;
    } else if (nombreCartaJugador === "cartaEspada") {
        id = 1;
    } else {
        id = 2;
    }
    for (i in baraja) {

        baraja[i].setAttribute('disabled', 'disabled');
    }

    if (nombreCartaJugador === cartaSoldado.id) {
        mensaje.innerHTML = "Empate"
    } else if (nombreCartaJugador === "cartaCastillo" && cartaSoldado.id === "cartaEspada") {
        mensaje.innerHTML = "Ganaste"
        puntajeJugador++;

    } else if (nombreCartaJugador === "cartaEspada" && cartaSoldado.id === "cartaPergamino") {
        mensaje.innerHTML = "Ganaste"
        puntajeJugador++;
    } else if (nombreCartaJugador === "cartaPergamino" && cartaSoldado.id === "cartaCastillo") {
        mensaje.innerHTML = "Ganaste"
        puntajeJugador++;
    } else {
        mensaje.innerHTML = "Perdiste"
        puntajeGuardian++;
    }

    score.innerHTML = "" + puntajeGuardian+ " - " + puntajeJugador;
    seleccionar(id);
    setTimeout(function () {
        for (i in baraja) {

            baraja[i].removeAttribute('disabled', 'disabled');
            cartasAleatorias[i].src = "img/cartaAleatoria.png";
            mensaje.innerHTML = "Selecciona una carta"

        }
        removerSeleccion();
        if (puntajeJugador === 3) {
            cambiarSeccion(document.getElementById("resultado_6"));
            document.getElementById("resultadoBatalla").src = "img/tltGanaste.png";
            puntajeGuardian = 0;
            puntajeJugador = 0;
            score.innerHTML = "" + puntajeJugador + " - " + puntajeGuardian;
        } else if (puntajeGuardian === 3) {
            cambiarSeccion(document.getElementById("resultado_6"));
            document.getElementById("resultadoBatalla").src = "img/tltPerdiste.png";
            puntajeGuardian = 0;
            puntajeJugador = 0;
            score.innerHTML = "" + puntajeJugador + " - " + puntajeGuardian;
        }

    }, 2000);


}

function mostrarCarta(cartaGenerada) {
    var posicion = posicionAleatoria();
    if (cartaGenerada.id === "cartaCastillo") {
        posicion.src = "img/cartaCastillo.png";
    } else if (cartaGenerada.id === "cartaEspada") {
        posicion.src = "img/cartaEspada.png";
    } else {
        posicion.src = "img/cartaPergamino.png";
    }

}

function removerSeleccion() {
    for (i in baraja) {
        baraja[i].classList.remove("seleccionado")

    }
}

function seleccionar(seccion_id) {
    removerSeleccion();
    baraja[seccion_id].classList.add("seleccionado");
}