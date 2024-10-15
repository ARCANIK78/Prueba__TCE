let proyectos = [
    {
        "url": "articulosimg/SistemaGestionBibli/Captura.JPG",
        "nombre": "Sistema de Gestión de una Biblioteca",
        "descripcion": "Aplicación de escritorio para gestionar una biblioteca. Permite agregar libros, gestionar lectores, prestar y devolver libros, entre otras funciones.",
        "lenguaje": "Python, PyQt, MySql"
    },
    {
        "url": "articulosimg/Tuhogarideal/tu-hogar-ideal.JPG",
        "nombre": "Tu-Hogar-Ideal",
        "descripcion": "Plataforma web para la búsqueda, compra y venta de inmuebles en Bolivia, optimizada para facilitar la conexión entre compradores y vendedores de manera rápida y segura.",
        "lenguaje": "React, Material UI, NodeJS, MongoDB"
    },
    {
        "url": "articulosimg/SistemaAsistencia/Captura0.PNG",
        "nombre": "Sistema de Gestión de Asistencia",
        "descripcion": "Aplicación de escritorio diseñada para gestionar la asistencia de empleados utilizando códigos QR. Permite registrar entradas y salidas, con soporte para reportes y análisis de puntualidad.",
        "lenguaje": "Python, Tkinter, SQLite"
    },
    {
        "url": "articulosimg/SistemaContabilidad/Captura1.PNG",
        "nombre": "Sistema de Contabilidad",
        "descripcion": "Software contable diseñado para pequeñas y medianas empresas, que permite la gestión eficiente de libros contables, cálculos automáticos de impuestos y generación de informes financieros.",
        "lenguaje": "Python, Tkinter, SQLite"
    },
    {
        "url": "articulosimg/retro/Captura.JPG",
        "nombre": "Retrogames",
        "descripcion": "Primer proyecto de desarrollo web: una página estática sobre videojuegos. Incluye información básica y listas de consolas.",
        "lenguaje": "HTML, CSS, GitHubPages"
    }
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;

posicionCarrusel();

atras.addEventListener('click', function(){
    actual -= 1;
    
    if (actual == -1){
        actual = proyectos.length - 1;
    }

    actualizarCarrusel();
});  

adelante.addEventListener('click', function(){
    actual += 1;

    if (actual == proyectos.length){
        actual = 0;
    }
    

    actualizarCarrusel();
});  

function actualizarCarrusel() {
    imagen.innerHTML = `<img class="img" src="${proyectos[actual].url}" alt="${proyectos[actual].nombre}" loading="lazy">`;
    texto.innerHTML = `
        <h3>${proyectos[actual].nombre}</h3>
        <p>${proyectos[actual].descripcion}</p>
        <p><strong>Lenguajes utilizados:</strong> ${proyectos[actual].lenguaje}</p>
    `;
    posicionCarrusel();
}

function posicionCarrusel() {
    puntos.innerHTML = "";
    for (var i = 0; i < proyectos.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.</p>';
        } else {
            puntos.innerHTML += '<p>.</p>';
        }
    } 
}

setInterval(() =>
{
    actual += 1;
    if (actual == proyectos.length){
        actual = 0;
    }
    actualizarCarrusel();
}, 5000
)