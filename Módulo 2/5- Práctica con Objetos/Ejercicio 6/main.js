/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {

    // Propiedades

    isbn
    titulo
    autor
    numeroPag   

    // Constructor

    constructor(isbn, titulo, autor, numeroPag){
        this.isbn = isbn
        this.titulo = titulo
        this.autor = autor
        this.numeroPag = numeroPag
    }

    // Getters
    get isbn(){
        return this.isbn
    }

    get titulo(){
        return this.titulo
    }

    get autor(){
        return this.autor
    }

    get numeroPag() { 
        return this.numeroPag
    }

    // Setters

    set isbn(nuevoISBN){
        this.isbn = nuevoISBN
    }

    set titulo(nuevoTitulo){
        this.titulo = nuevoTitulo
    }

    set autor(nuevoAutor){
        this.autor = nuevoAutor
    }

    set numeroPag(nuevoNumeroPag){
        this.numeroPag = nuevoNumeroPag
    }

    // Métodos

    mostrarLibro() {
        alert(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene un total de ${this.numeroPag}`)
    }
}

const elPrincipito = new Libro('1234567890', 'El Principito', 'Antoine de Saint-Exupéry', 96)
const elCantarDelMioCid = new Libro('1234567891', 'Poema del Mio Cid', 'Anónimo', 150)

elPrincipito.mostrarLibro()
elCantarDelMioCid.mostrarLibro()

if(elPrincipito.numeroPag > elCantarDelMioCid.numeroPag){
    alert(`El libro con mayor cantidad de págines es ${elPrincipito.titulo}`)
}else{
    alert(`El libro con mayor cantidad de págines es ${elCantarDelMioCid.titulo}`)
}