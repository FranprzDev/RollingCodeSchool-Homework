// Clases
class Contacto {
    // variables

    nombre
    numero
    
    // constructor 
    constructor(nombre, numero){
        this.nombre = nombre;
        this.numero = numero;
    }

    // getters 

    get nombre(){
        return this.nombre
    }

    get numero(){
        return this.numero
    }
}

class Agenda {
    // variables

    contactos
    cantidad
    contadorAgenda
    contactosArray = []

    constructor(cantidad = 10){
        this.cantidad = cantidad;
        this.contadorAgenda = 0;
    }

    // métodos

    aniadirContacto(contacto){
        if(this.contadorAgenda < this.cantidad){
            this.contactosArray.push(contacto);
            this.contadorAgenda++;
        }else{
            console.log("La agenda esta llena, no se pueden agregar más contactos...")
        }
    }

    existeContacto(contacto){
        if(this.contactos.length > 0){
            for(let i = 0; i < this.contactosArray.length; i++){
                if(this.contactosArray[i] == contacto.nombre){
                    console.log(`El contacto existe...`)
                }else{
                    console.log(`El contacto no existe...`)
                }
            }
        }
    }

    listarContactos(){
        for(let i = 0; i < this.contactosArray.length; i++){
            console.log(`NOMBRE ${this.contactosArray[i].nombre()} ; NÚMERO ${this.contactosArray[i].numero()}`)
        }

    }
    buscarContacto(nombre){
        // ingresa un nombre y lo busco en la agenda

        for(let i = 0; i < this.contactosArray.length; i++){
            if(this.contactosArray[i].nombre == nombre){ console.log(`El contaxto existe y el número es ${contactosArray[i].numero}`)}
        }
    }

    eliminarContacto(contacto){
        for(let i = 0; i < this.contactosArray.length; i++){
            if(this.contactosArray[i].nombre == contacto.nombre){ 
                if(this.contactosArray[i].telefono == contacto.telefono){
                    this.contactosArray.slice(i, i + 1)
                    console.log("Se elimino el contacto sin problemas...");
                }else{
                    console.log("El contacto no coincidia en el telefono.")
                }
            }else{
                console.log("El contacto no pudo ser encontrado")
            }
        }
    }

    agendaLlena(){
        if(this.contadorAgenda > this.cantidad){
            console.log("La agenda esta llena.")
        }else{
            this.huecosLibres()
        }
    }

    huecosLibres(){
        if(this.contadorAgenda < this.cantidad){
            console.log(`Aún se pueden agregar un total de ${this.cantidad-this.contadorAgenda} de contactos.`)
        }else{
            this.agendaLlena()
        }
    }
}

// SEGUIMOS CON EL CÓDIGO NORMAL DE JAVASCRIPT...

// agarrar los numeros que necesito

// DOM -> Referencia al HTML
const crearAgenda = document.getElementById("crearAgenda")
const aniadirContacto = document.getElementById("aniadirContacto");
const borrarDatos = document.getElementById("borrarDatos");

// Valores de los formularios...
const nombreAgenda = document.getElementById("nombreAgenda").value
const cantidadAgenda = document.getElementById("cantMaxAgenda").value
const nombreContacto = document.getElementById("nombreContacto").value
const celularContacto = document.getElementById("celularContacto").value


function generarAgenda(){
    if(isNumeric(cantidadAgenda) == true){
        if(cantidadAgenda > 10){    let nombreAgenda = new Agenda(cantidadAgenda)   }
        else {                      let nombreAgenda = new Agenda()                 }
    }else{ alert("Hubo un problema al crear la agenda...") } // crea la agenda y prueba que sea númerico y que este bien el num.

    borrarDatos(2)
}

function enviarDatos(){

}

function borrarDatos(opc){
    if(opc == 1){
        nombreContacto = ''
        celularContacto = ''
    }else if(opc == 2){
        nombreAgenda = ''
        cantidadAgenda = ''
    }
}

crearAgenda.addEventListener("submite", generarAgenda)

aniadirContacto.addEventListener(click, enviarDatos)