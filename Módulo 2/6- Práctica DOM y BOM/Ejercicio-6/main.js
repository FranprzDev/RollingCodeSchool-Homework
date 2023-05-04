/*
6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar 
el contador. Debe contener los botones, iniciar, pausar y reset. 
*/




// funciones

function decrementarSegundos(){
    segundos = segundos - 1;

    const parentNode = document.getElementById("temporizador");
    const newNode = document.createElement("h2");
    newNode.classList.add("text-warning", "text-center", "my-3");

    newNode.innerHTML = `${segundos} [s]`;
    parentNode.innerHTML = "";
    parentNode.appendChild(newNode);
}


// obtención de elemnetos
const minutos = document.getElementById('minForm')
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const reiniciar = document.getElementById("reiniciar");
const cargarDatos = document.getElementById('cargarDatos')

// variables
let intervalo
let segundos

// if (minutos.value == 0) {
//   minutos.setAttribute("disabled", "");
// } else {
//   minutos.removeAttribute("disabled");
// }

cargarDatos.addEventListener('click', (e) =>{
    if(minutos.value == 0){
        alert('Debes ingresar un tiempo en minutos.')
    }else{
        e.preventDefault()
        segundos = parseInt(minutos.value)*60
    }

})

iniciar.addEventListener('click', (e) => {

    if(minutos.value == 0){
        alert('Debes ingresar un tiempo en minutos.')
    }else{
        e.preventDefault();
        
        segundos = parseInt(minutos.value)*60
        intervalo = setInterval(decrementarSegundos,1000)
    }
})

pausar.addEventListener("click", (e) => {
    e.preventDefault()

    clearInterval(intervalo)
})

reiniciar.addEventListener('click', (e) =>  {
    e.preventDefault()
    clearInterval(intervalo)

    const parentNode = document.getElementById("temporizador");
    const newNode = document.createElement("h2");
    newNode.classList.add("text-light", "text-center", "my-3");
  
    minutos.value = 0
    segundos = 0
    newNode.innerHTML = `00 [s]`;
  
    parentNode.innerHTML = "";
    parentNode.appendChild(newNode);
})