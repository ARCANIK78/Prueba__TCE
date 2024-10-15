const datos = {
  "works": [
    {
        "Title": "Sistema de Gestión de una Biblioteca",
        "Descripcion": "Aplicación de escritorio para gestionar una biblioteca. Permite agregar libros, gestionar lectores, prestar y devolver libros, entre otras funciones.",
        "Lenguaje": "Python, PyQt, MySql",
        "FechaFinalizacion": "Pendiente",
        "Imagenes": [ "articulosimg/SistemaGestionBibli/Captura.JPG" ]
    },
    {
      "Title": "Tu-Hogar-Ideal",
      "Descripcion": "Plataforma web para la búsqueda, compra y venta de inmuebles en Bolivia, optimizada para facilitar la conexión entre compradores y vendedores de manera rápida y segura.",
      "Lenguaje": "React, Material UI, NodeJS, MongoDB",
      "FechaFinalizacion": "Pendiente",
      "Imagenes": [
        "articulosimg/Tuhogarideal/tu-hogar-ideal.JPG",
        "articulosimg/Tuhogarideal/Captura4.JPG",
        "articulosimg/Tuhogarideal/tu-hogar-ideal2.JPG",
        "articulosimg/Tuhogarideal/tu-hogar-ideal3.JPG"

      ]
    },
    {
      "Title": "Sistema de Gestión de Asistencia",
      "Descripcion": "Aplicación de escritorio diseñada para gestionar la asistencia de empleados utilizando códigos QR. Permite registrar entradas y salidas, con soporte para reportes y análisis de puntualidad.",
      "Lenguaje": "Python, Tkinter, SQLite",
      "FechaFinalizacion": "Finalizado en 2023",
      "Imagenes": [ "articulosimg/SistemaAsistencia/Captura0.PNG",
                    "articulosimg/SistemaAsistencia/Captura1.PNG",
                    "articulosimg/SistemaAsistencia/Captura2.PNG",
                    "articulosimg/SistemaAsistencia/Captura3.PNG",
                    "articulosimg/SistemaAsistencia/Captura4.PNG",
                    "articulosimg/SistemaAsistencia/Captura5.PNG"
       ]
    },
    {
      "Title": "Sistema de Contabilidad",
      "Descripcion": "Software contable diseñado para pequeñas y medianas empresas, que permite la gestión eficiente de libros contables, cálculos automáticos de impuestos y generación de informes financieros.",
      "Lenguaje": "Python, Tinkter, SQLite",
      "FechaFinalizacion": "Finalizado en 2023",
      "Imagenes": [ "articulosimg/SistemaContabilidad/Captura1.PNG",
                    "articulosimg/SistemaContabilidad/Captura2.PNG",
                    "articulosimg/SistemaContabilidad/Captura3.PNG",
                    "articulosimg/SistemaContabilidad/Captura4.PNG",
                    "articulosimg/SistemaContabilidad/Captura5.PNG"
       ]
    },
    {
      "Title": "Logo y Calculadora en Ensamblador",
      "Descripcion": "Proyecto en assembler que muestra el logo de la carrera en formato pixelado y funciona como una calculadora básica. Utiliza operaciones aritméticas y gráficos en bajo nivel para una experiencia visual interactiva.",
      "Lenguaje": "Assembly (Ensamblador)",
      "FechaFinalizacion": "Finalizado en 2023",
      "Imagenes":[
        "articulosimg/asembler/asm1.jpg",
        "articulosimg/asembler/asm2.jpg"
  ]
    },
    {
        "Title": "Retrogames",
        "Descripcion": "Primer proyecto de desarrollo web: una página estatica sobre videojuegos. Incluye información básica, listas de Consolas.",
        "Lenguaje": "HTML, CSS",
        "FechaFinalizacion": "Finalizado en 2023",
        "Imagenes":[ "articulosimg/retro/Captura.JPG",
                     "articulosimg/retro/Captura1.JPG",
                     "articulosimg/retro/Captura2.JPG",
                     "articulosimg/retro/Captura3.JPG"
        ]
      },
      {
        "Title": "Implementación de Métodos de Ordenamiento en ASP.NET",
        "Descripcion": "Desarrollo de una aplicación web que implementa y compara distintos algoritmos de ordenamiento, como Burbuja, Selección, Inserción y QuickSort. El proyecto fue realizado como parte de la asignatura de Analisis y Diseño de Algoritmo, permitiendo la visualización y análisis del rendimiento de cada método.",
        "Lenguaje": "ASP.NET, C#",
        "FechaFinalizacion": "Finalizado en 2022",
        "Imagenes":[
          "articulosimg/metodoOrdena/Captura1.JPG",
          "articulosimg/metodoOrdena/Captura2.JPG",
          "articulosimg/metodoOrdena/Captura3.JPG",
          "articulosimg/metodoOrdena/Captura4.JPG"
        ]
      }
  ]
}
const worksSection = document.getElementById('worksSections');

function createWorksCards(works){
    works.forEach(work => {
        const card = document.createElement('section');
        card.classList.add('works-card');

        // Crear contenedor para las imágenes
        let currentImageIndex = 0;

        // Crear la tarjeta con la primera imagen
        card.innerHTML = `
        <img src="${work.Imagenes[currentImageIndex]}" alt="${work.Title}" class="image-slide">
        <h3>${work.Title}</h3>
        <p>${work.Descripcion}</p>
        <p><strong>Lenguajes:</strong> ${work.Lenguaje}</p>
        <p><strong>Fecha de Finalización:</strong> ${work.FechaFinalizacion}</p>
        `;

        worksSection.appendChild(card);

        // Función para cambiar la imagen cada 2 segundos
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % work.Imagenes.length; // Avanza a la siguiente imagen
            const imageElement = card.querySelector('.image-slide');
            imageElement.src = work.Imagenes[currentImageIndex]; // Actualiza la imagen
        }, 4000); // Cambia cada 2 segundos
    });
}

createWorksCards(datos.works);