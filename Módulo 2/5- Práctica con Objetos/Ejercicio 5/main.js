/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones

*/

class Persona {
    nombre
    edad
    dni 
    sexo
    peso 
    altura
    fechaNac

    constructor(nombre, edad, dni, sexo, peso, altura, fechaNac){
        this.nombre = nombre
        this.edad = edad
        this.dni = dni 
        this.sexo = sexo 
        this.peso = peso 
        this.altura = altura 
        this.fechaNac = fechaNac
    }

    mostrarGeneracion(){
        // Tomo la idea de una fecha tal que sea: xx/xx/xxxx
        // de este modo lo spliteo para hacerlo array y separar por / a su vez voy directamente al 
        // índice del split que me interesa; que en este caso es el del año.
        let arrayFechaNac = this.fechaNac.split("/")

        let anioNac = arrayFechaNac[2]
        
        if(anioNac > 1930 && anioNac < 1948){
            alert(`Pertenece a la Generación Silent y su rasgo es la austeridad.`)
        }else if(anioNac > 1949 && anioNac < 1968){
            alert(`Pertenece a la Generación Baby Boom y su rasgo es la ambición.`)
        }else if(anioNac > 1969 && anioNac < 1980){
            alert(`Pertenece a la Generación XZ y su rasgo es la obsesión por el éxito.`)
        }else if(anioNac > 1981 && anioNac < 1993){
            alert(`Pertenece a la Generación Y (millennials) y su rasgo es la frustracción.`)
        }else if(anioNac > 1994 && anioNac < 2010){
            alert(`Pertenece a la Generación Z y su rasgo es la Irreverencia.`)
        }else{
            alert(`El anio ${anioNac} aún no fue categorizado.`)
        }
    }
}