let a = prompt("Ingrese un numero: ");
let b = prompt("Ingrese otro numero: ");
let c = prompt("Ingrese otro numero: ");

parseInt(a);
parseInt(b);
parseInt(c);

if(a > b && a > c){
    document.write("El mayor de los numeros es: " + a );
}else if(b > a && b > c){
    document.write("El mayor de los numeros es: " + b );
}else{
    document.write("El mayor de los numeros es: " + c );
}
