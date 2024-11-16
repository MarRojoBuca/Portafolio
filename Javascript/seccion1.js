alert("Me ejecuto desde un archivo externo");

// Comentario a una sola linea

/*
    Comentario a varias lineas
*/

//LA CONSOLA
//console.log("Mensaje en la consola") Este mensaje no se ve en la pagina, para ver el mensaje hay que hacer clic derecho en la inspeccionar elemento y clic en console;

console.log("Hola Mundo")

//VARIABLES
/* Inicializaciòn de una Variable */
var edad= 5;
//Utilizaciòn de una variable
console.log(edad);

//Tipos de Datos
//Numeros
var Numero = 5;
var Numero_float= 5.5;
//Cadena de Texto
var Cadena="Hola Mundo!";
//Booleanos
var Booleano = true;
//Arreglos (Arrays)
var arreglo = [1,2,3,4,5];
var frutas = [pera,manzana,uva,];
//Objetos
var objeto= {
    nombre: "Juan",
    edad: 25
};
var carro= {
    marca:"Toyota",
    modelo: "Corola",
    anio: 2015
};
//Undefined
var indefinido;
//Null
var Nulo= null;

//OPERADORES COMPARATIVOS

//Aritmeticos

var suma = 5 + 3;
var resta = 5 - 3;
var multiplicaciòn = 5 + 3;
var division = 5 / 3;

//Modulos El modulo te da el residuo de la division es decir el Resto
var modulo = 5 % 2;
var modulo = 4 % 2;

//exponente
var exponente = 5 ** 2; 

//comparacion

var igual = 5 == "5";  // si son iguales a pesar que uno es un numero y el otro es un string, esto da verdad
var exactamente_igual = 5 === "5"; //El exactamente igual toma en cuenta el tipo de dato por eso este ejemplo no es exactamente igual, esto da False
var diferente = 5 != 5; //esto da falso
var exactamente_diferente = 5 !== "5"; //como toma en cuenta el tipo de datos aqui si son exactamente diferente, esto da verdad
var mayor_que = 5 > 3; //verdad
var menor_que = 5 < 7; //falso
var mayor_o_igual = 5 >= 5; //verdad
var menor_o_igual = 5 <= 8; //verdad

//Operadores Logicos

//Ejercicios para practicar la lògica

// (Facil)
var uno = !true || false;
var dos = false && !false;
var tres = true && !false;

//(Medio)
var cuatro = (5 === 5) || (!true);
var cinco = (!0) || (5 < 0);
var seis = (3 > 4) && (!0);

//(Avanzado)
var siete = (((false || true) && (!false && true) )) || (true && false);
var ocho = (6 === 3+3) && (9/3 >=3);
var nueve = (!(!false) || (("1" == 1)) && (!false === true));

//(hardcore)
var diez = !(!true) === !(!( 5 >= 5 ));
var once = !(true && (!true === !( !(8 === 4*2) )));

//(Ultra hardcore)
var doce = !( true && (!true === !(!(16 === (4*2) + 8))) ) !== (false);

//(Leyenda)
