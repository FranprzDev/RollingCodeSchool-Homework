let frase = prompt("Ingrese una frase: ");

let longitud = frase.length;

let vocalesArray = new Array();

// un array no se declara como let array[arrayLenght]
// se declara como en c#


for(let i = 0; i < longitud; i++){
    if(frase.charAt(i) == 'a' || frase.charAt(i) == 'e' || frase.charAt(i) == 'i' || frase.charAt(i) == 'o' || frase.charAt(i) == 'u'){
        // vocalesArray[i] = frase.charAt(i);
        // con la asignación se me ponen todas las letras del array, no tiene sentido que pase eso
        vocalesArray.push(frase.charAt(i));
    }
    if(frase.charAt(i) == 'A' || frase.charAt(i) == 'E' || frase.charAt(i) == 'I' || frase.charAt(i) == 'O' || frase.charAt(i) == 'U'){
        vocalesArray.push(frase.charAt(i));
        // usando un .push entonces me pone solo lo que esta en la condición.
    }

    // No me funciona el .toLowerCase
}

alert(vocalesArray);
// si mando este alert sólo me imprime todo el array, una joyita para no hacer el for.

// Tecnicamente funciona, pero no es la mejor solución muy probablemente, tampoco la solución que es acorde al temario dle curso.

// Pues estoy usando bucles repetitivos para recorrer el array para saber dónde se encuentra la frase y no una nativa de js.