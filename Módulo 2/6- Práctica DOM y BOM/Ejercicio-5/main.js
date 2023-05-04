// Variables del cronometro:

let segundos = 0;
let minutos = 0;
let horas = 0;
let control;


// funciones

function aumentarCronometro(){
    if(segundos < 60){
        segundos++;
    }

    if(segundos == 60){
        segundos = 0;
        minutos++;
    }

    if(minutos == 60){
        horas++;
        minutos = 0
    }

    if(horas == 24){
        horas = 0;
        minutos = 0
        segundos = 0
    }

    const horarioCrono = document.getElementById("horarioCronometro");
    const actuHorario = document.createElement("h2");
    actuHorario.classList.add("text-light", "text-center", "my-3");
  
    if(segundos <= 9){
        actuHorario.innerHTML = `${horas}:${minutos}:0${segundos}`;
    }
    if(minutos <= 9){
        if(segundos <= 9){
            actuHorario.innerHTML = `${horas}:0${minutos}:0${segundos}`;
        }else{
            actuHorario.innerHTML = `${horas}:0${minutos}:${segundos}`;
        }
    }

    if(horas <= 9){
        if(minutos <= 9){
            if(segundos <= 9){
                actuHorario.innerHTML = `0${horas}:0${minutos}:0${segundos}`;
            }else{
                actuHorario.innerHTML = `0${horas}:0${minutos}:${segundos}`;
            }
        }
    }else{
        actuHorario.innerHTML = `0${horas}:0${minutos}:${segundos}`;
    }
  
    horarioCrono.innerHTML = "";
    horarioCrono.appendChild(actuHorario);
}

// GetElement
const cronometro = document.getElementById("horarioCronometro");
const iniciar = document.getElementById("iniciarCronometro");
const pausar = document.getElementById("pausarCronometro");
const reiniciar = document.getElementById("reiniciarCronometro");

const iniciar2 = document.getElementById("iniciarCronometro");


iniciar.addEventListener("click", (e) => {
  e.preventDefault();
  control = setInterval(aumentarCronometro,1000)

});

pausar.addEventListener("click", (e) => {
    e.preventDefault()

    clearInterval(control)
})

reiniciar.addEventListener('click', (e) =>  {
    e.preventDefault()
    clearInterval(control)

    const horarioCrono = document.getElementById("horarioCronometro");
    const actuHorario = document.createElement("h2");
    actuHorario.classList.add("text-light", "text-center", "my-3");
  
    horas = 0
    minutos = 0
    segundos = 0
    actuHorario.innerHTML = `${horas}:${minutos}:${segundos}`;
  
    horarioCrono.innerHTML = "";
    horarioCrono.appendChild(actuHorario);
})
