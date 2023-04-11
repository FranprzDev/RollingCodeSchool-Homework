let numero = prompt("Ingrese un numero: ");

parseInt(numero);

if(numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0){

    document.write("El numero es divisible en alguno de estos divisores: (2,3,5,7)");
    
    if(numero % 2 == 0){
        document.writeln("Especificamente es divisible en 2.");
    }
    if(numero % 3 == 0){
        document.writeln("Especificamente divisible en 3.");
    }
    if(numero % 5 == 0){
        document.writeln("Especificamente es divisible en 5.");
    }
    if(numero % 7 == 0){
        document.writeln("Especificamente es divisible en 7.");
    }
}