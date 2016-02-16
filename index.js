'use strict';

// Almacenar en una variable el resultado de sumar 1 y 2
var a = 1 + 2;
console.log(a);
// alert(a); // Esto muestra una ventana emergente

// Almacenar en una variable el resultado de dividir 6 entre 2
var b = 6/2;
console.log(b);


// Almacenar en una variable el precio de un artículo de 20€ aplicándole el 21% de IVA .
var precioIVA = 20 + 20*0.21;
console.log(precioIVA);



// Definir una variable con el valor 4 y utilizar el operador (```++```) para incrementar en uno su valor.
var x = 4;
x++;
console.log(x);


// Definir una variable que almacene la concatenación de dos cadenas de texto.
var cadena1 = 'Mi nombre es ';
var cadena2 = 'Carmen';
var cadenafinal = cadena1 + cadena2;
console.log(cadenafinal);

// Definir una variable ```price``` con el valor ```19.99```y aplicar la abreviación ```/=``` para dividirlo entre ```1.21``` para obtener el precio sin IVA.
var price = 19.99;
price /= 1.21;
console.log(price);


// Asignar a dos variables valores booleanos y hacer al menos una operación combinando un operador lógico: **AND** (```&&```) o **OR** (```||```)
var boleano1 = true;
var boleano2 = false;
var boleano3 = boleano1 && boleano2;
var boleano4 = boleano1 || boleano2;
console.log(boleano4);


// Realizar 4 expresiones que utilicen operadores relacionales (```<```, ```==```, ```!=``` y ```===```) y almacenen los valores en tres variables distintas.
var d = 4;
var c = 5;
boleano5 = c < d;
boleano6 = c == d;
boleano7 = c!= d;
boleano8 = 




/*
  Crear un bucle for que imprima los mensajes:
  Valor de i: 0
  Valor de i: 2
  ... hasta ...
  Valor de i: 9
*/
var i;
for(i = 0; i <= 9; i++){
  console.log("i: " + i);
}


/*
  Crear un bucle for que imprima los mensajes: con números pares
  Valor de i: 0
  Valor de i: 2
  Valor de i: 4
  ... hasta ...
  Valor de i: 8
*/
var i;
for(i = 0; i <= 8; i++){
  if(i % 2 == 0){
    console.log("i: " + i)
  }
}

/*
  Crear un bucle dentro de otro (anidados) que imprima
  Valor de i: 0
  Valor de j: 0
  
  Valor de i: 0
  Valor de j: 1
  
  Valor de i: 0
  Valor de j: 2
  
  ... hasta ...
  
  Valor de i: 9
  Valor de j: 9
*/

var i;
var j;
for(i = 0; i <= 9; i++){
  {for(j = 0; j<=9; j++){
    console.log("i: " + i);
    console.log("j: " + j);
  }
}
