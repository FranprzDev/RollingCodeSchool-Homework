/*
4- Crear una web con un reloj que muestre la siguiente información:

*/
let fecha = new Date();

let dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let diaSemana = dias[fecha.getDay()];
let diaMes = fecha.getDate();
let mes = meses[fecha.getMonth()];
let ano = fecha.getFullYear();
let fechaFormateada = diaSemana + ' ' + diaMes + ' de ' + mes + ' del ' + ano;

const fechaActual = document.getElementById('fechaActual')
const nuevaFecha = document.createElement('h1')
nuevaFecha.classList.add('text-warning', 'text-center', 'my-3')
nuevaFecha.innerHTML = `
    👋 ${fechaFormateada.toUpperCase()} 👋
`

fechaActual.appendChild(nuevaFecha)

// HORARIO

function actualizarHora(){
    let fechaReloj = new Date()
    let horas = fechaReloj.getHours()
    let mins = fechaReloj.getMinutes()
    let secs = fechaReloj.getSeconds()

    const horaActual = document.getElementById('horaActual')
    const nuevaHora = document.createElement('h2')
    nuevaHora.classList.add('text-dark', 'text-center', 'my-3')

    if (horas < 10) {
      horas = "0" + horas;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }

    nuevaHora.innerHTML = `${horas}:${mins}:${secs}`
    
    horaActual.innerHTML = ''
    horaActual.appendChild(nuevaHora) 
}

setInterval(actualizarHora, 1000);

