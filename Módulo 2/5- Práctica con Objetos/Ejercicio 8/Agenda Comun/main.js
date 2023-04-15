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

    existeContacto(nombre){
        if(this.contactosArray.length > 0){
            for(let i = 0; i < this.contactosArray.length; i++){
                if(this.contactosArray[i].nombre == nombre){
                    console.log(`El contacto existe...`)
                }
            }
        }
    }

    listarContactos(){
        for(let i = 0; i < this.contactosArray.length; i++){
            console.log(`NOMBRE ${this.contactosArray[i].nombre} ; NÚMERO ${this.contactosArray[i].numero}`)
        }

    }

    buscarContacto(nombre){
        let guardIndex = 0
        for(let i = 0; i < this.contactosArray.length; i++){
            if(this.contactosArray[i].nombre == nombre){
                guardIndex = i
            }
        }
        console.log(`El contacto ${this.contactosArray[guardIndex].nombre} existe y el número es ${this.contactosArray[guardIndex].numero}`);
    }

    eliminarContacto(contacto){
        let guardIndex = 0;
        for(let i = 0; i < this.contactosArray.length; i++){
            if(this.contactosArray[i].nombre == contacto.nombre){ 
                if(this.contactosArray[i].telefono == contacto.telefono){
                    guardIndex = i;
                    i = this.contactosArray.length
                }
            }
        }

        this.contactosArray.splice(guardIndex,1)
        this.contadorAgenda--
    }

    agendaLlena(){
        if(this.contadorAgenda >= this.cantidad){
            console.log("La agenda esta llena.")
        }
    }

    huecosLibres(){
        if(this.contadorAgenda < this.cantidad){
            console.log(`Aún se pueden agregar un total de ${this.cantidad-this.contadorAgenda} de contactos.`)
        }
    }
}

    /*
    Si se pega este código en la consola de JS si funcionará.

        const miAgenda = new Agenda(11)
        const francisco = new Contacto("francisco",3815412480)
        const messi = new Contacto("messi",3835412480)
        const dybala = new Contacto("dybala",3812412480)
        miAgenda.aniadirContacto(francisco)
        miAgenda.aniadirContacto(messi)
        miAgenda.aniadirContacto(dybala)
        miAgenda.existeContacto("francisco")
        miAgenda.listarContactos()
        miAgenda.buscarContacto("messi")
        miAgenda.eliminarContacto("francisco")
        miAgenda.aniadirContacto(francisco)
        miAgenda.aniadirContacto(francisco)
        miAgenda.huecosLibres()
        miAgenda.aniadirContacto(messi)
        miAgenda.aniadirContacto(dybala)
        miAgenda.aniadirContacto(francisco)
        miAgenda.aniadirContacto(messi)
        miAgenda.aniadirContacto(dybala)
        miAgenda.huecosLibres()
        miAgenda.aniadirContacto(messi)
        miAgenda.aniadirContacto(dybala)
        miAgenda.agendaLlena()
    */  
