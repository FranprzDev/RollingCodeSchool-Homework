class Persona {
    constructor(nombre,edad,dni,domicilio,hijos,profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.domicilio = domicilio;
        this.hijos = hijos;
        this.profesion = profesion;
    }

    saludar(){
        alert(`Hola soy ${this.nombre}`)
    }

    listar(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
        console.log(`Dni: ${this.dni}`)
        console.log(`Domicilio: ${this.domicilio}`)
        console.log(`Hijos: ${this.hijos}`)
        console.log(`Profesión: ${this.profesion}`)
    }
}

let francisco = new Persona("Francisco", 19, 44190234, "Delfín Gallo", "0", "Ninguna")
