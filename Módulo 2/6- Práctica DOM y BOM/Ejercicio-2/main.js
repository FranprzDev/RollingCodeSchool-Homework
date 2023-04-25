class Persona {
    nombre
    edad
    dni 
    sexo
    peso 
    altura
    anioNac

    constructor(nombre, edad, dni, sexo, peso, altura, anioNac){
        this.nombre = nombre
        this.edad = edad
        this.dni = dni 
        this.sexo = sexo 
        this.peso = peso 
        this.altura = altura 
        this.anioNac = anioNac
    }

    mostrarGeneracion(){
        if(anioNac > 1930 && anioNac < 1948){
            return (`Pertenece a la Generación Silent y su rasgo es la austeridad.`)
        }else if(anioNac > 1949 && anioNac < 1968){
            return (`Pertenece a la Generación Baby Boom y su rasgo es la ambición.`)
        }else if(anioNac > 1969 && anioNac < 1980){
            return (`Pertenece a la Generación XZ y su rasgo es la obsesión por el éxito.`)
        }else if(anioNac > 1981 && anioNac < 1993){
            return (`Pertenece a la Generación Y (millennials) y su rasgo es la frustracción.`)
        }else if(anioNac > 1994 && anioNac < 2010){
            return (`Pertenece a la Generación Z y su rasgo es la Irreverencia.`)
        }else{
            return (`El anio ${anioNac} aún no fue categorizado.`)
        }
    }

    esMayorDeEdad(anioNac){
        if((2023-anioNac) > 18){ 
            return "Es mayor de edad" 
        }else{
            return "No es mayor de edad"
        }
    }

    mostrarDatos(){
        alert(`
            nombre: ${this.nombre}
            edad: ${this.edad} 
            dni: ${this.dni}  
            sexo: ${this.sexo} 
            peso: ${this.peso}  
            altura: ${this.altura}  
            anioNac: ${this.anioNac} 
        `)
    }
}
    
// FUNCIONES
function crearObjeto(event) {
    console.log("se envio")
    event.preventDefault();
    let nombreObj = nombreInput.value
    let edadObj = edadInput.value
    let dniObj = dniInput.value
    let sexoObj = sexoInput.value
    let pesoObj = pesoInput.value
    let alturaObj = alturaInput.value
    let anioNacObj = anioNac.value

    // esto se lo paso al constructor para crear el objeto...
    let persona = new Persona(nombreObj, edadObj, dniObj, sexoObj, pesoObj, alturaObj, anioNacObj);
    console.log("aniadir");
    aniadirPersona(objeto);
}

function aniadirPersona(objeto){
    listaPersonas.push(objeto);

    const myNode = document.getElementById('contenedorPersonas');
    myNode.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Nombre Persona</h5>
          <p class="card-text">
            Edad: ${objeto.nombreObj} DNI: ${objeto.dniObj} Sexo: ${objeto.sexoObj} 
            Peso: ${objeto.pesoObj} Altura: ${objeto.alturaObj} Año Nacimiento: ${objeto.nacimientoObj} 
          </p>
        </div>
      </div>
    `;
    console.log("se aniadio");
    // con esto añado el nodo al html  y listo
}

// Esta función debería añadir un nodo para ir añadiendo la gente que exista en el array Lista Personas para que así se vaya poniendo de manera dinámica.


// Values

let nombreInput = document.getElementById('nombreInput')
let edadInput = document.getElementById('edad')
let dniInput = document.getElementById('dniInput')
let sexoInput = document.getElementById('elegirSexo')
let pesoInput = document.getElementById('pesoInput')
let alturaInput = document.getElementById('altura')
let anioNac = document.getElementById('anioNac')
let crearPersona = document.getElementById('crearPersona')
let personas = document.getElementsByTagName('contenedorPersonas')
let formEnviar = document.getElementById('formObj')

let listaPersonas = []

// addEvent

formEnviar.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("se envio")

    let nombreObj = document.getElementById('nombreInput').value
    let edadObj = document.getElementById('edad').value
    let dniObj = document.getElementById('dniInput').value
    let sexoObj = document.getElementById('elegirSexo').value
    let pesoObj = document.getElementById('pesoInput').value
    let alturaObj =  document.getElementById('altura').value
    let anioNacObj = document.getElementById('anioNac').value

    // esto se lo paso al constructor para crear el objeto...
    let persona = new Persona(nombreObj, edadObj, dniObj, sexoObj, pesoObj, alturaObj, anioNacObj);
    console.log("aniadir");
    aniadirPersona(objeto);

});

// no me lee loas cosas y no  entiendo porque
// pero debería de funcionar..
