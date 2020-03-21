"use strict";

//VARIABLES

/*var gato = "Esto es un gato";
var barco = gato;

const PI = "3.1416";

alert(gato);

document.write(gato);
console.log(gato);

var primero = false;
document.write(typeof primero);
*/

/* 
NUMERICOS (number)
CADENA (string)
BOOLEANOS (true - false)
FECHAS Date ()
SIMBOLOS
OBJETOS
*/

//------------------------------------------------------------------------------------

/*var primero = new Date();

document.write(primero.getHours() + ": ", primero.getMinutes());*/

//-----------------------------------------------------------------------------------

/*
Relacionales

<
>
<=
>=
==
!=
*/

//------------------------------------------------------------------------------------

/*
Comparaciones logicas

y = &&

o = ||

negacion = !

*/

//------------------------------------------------------------------------------------

/*

Operador de asignacion
+=
-=
/=
%=
*/

//------------------------------------------------------------------------------------

// condicion ? TRUE : FALSE;
/*var uno = 10;
var dos = 20;
document.write(uno == dos ? "ES IGUAL" : "NO ES IGUAL");*/

//------------------------------------------------------------------------------------

/*

while

dowhile

switch

for

*/

//------------------------------------------------------------------------------------

/*


var uno = 20;
var dos = 50;
var tres = uno + dos;
tres++;

document.write(tres);

document.write(uno == dos && uno < dos);*/
//------------------------------------------------------------------------------------

//FUNCIONES

//Sin parámetros
/*function uno() {
    var saludo = document.write("Hola a toodos");
    return saludo;
}

//Con parámetros
function dos(a, b, c) {
    var datos = document.write("Y yo soy: " + a + b + c);

    return datos;
}

dos("Iron ", "Man", "...");

//Preinicialización de parámetros
function tres(nombre = "") {
    var nombreCompleto = nombre;
    return document.write(nombreCompleto);
}

tres("<br>Erco<br>");

//Evaluación de parámetros
function cuatro(nombre, apellido) {
    var respuesta;
    if (nombre != null && apellido != null) {
        respuesta = document.write(nombre + " ", apellido);
    } else {
        respuesta = document.write("No puso sus datos completos");
    }
    return respuesta;
}

cuatro("Mario", "Matias");

//Rest
function cinco(...meses) {
    for (let uno of meses) {
        document.write(uno + "<br>");
    }
}
cinco("Enero", "Febrero", "Marzo");

//Spread
function seis(nombre, precio, peso) {
    return "Nombre: " + nombre + "<br>Precio: " + precio + "<br>Peso: " + peso;
}

var juguete = ["Soldado", 25, 2];

document.write(seis(...juguete));

//Funciones Anonimas
var siete = function() {
    var respuesta = "Hola a todos";
    return respuesta;
};

document.write(siete());


*/

//CallBacks
/*

var a = function(nombre, uno) {
    var e = nombre;
    uno(e);
};

var b = function(i) {
    document.write(i);
};

a("<br> Erco", b);


*/

//Arrows
/*var uno = nombre => nombre;

var dos = (nombre, apellido) => nombre + apellido;

document.write(dos("<br>Matias ", "Ercolani"));*/

//------------------------------------------------------------------------------------

//EVENTOS DE RATÓN

//Onclick
/*function apretar() {
    alert("Holaaaa!");
}

function encima() {
    alert("El raton esta encima");
}

function fuera() {
    alert("El taron esta AFUERA");
}*/

/*

var eventoUno = document.querySelector(".tres");

//en lugar de "click" se puede poner "mouseout" o "mouseover".
eventoUno.addEventListener("click", function() {
    alert("HOLA");
});

*/

//------------------------------------------------------------------------

//EVENTOS DE TECLADO

/*
keydown
keypress
keyup

en lugar de "keydown" se puede poner "keypress" o "keyup".
*/

/*window.addEventListener("keydown", function() {
    alert("ACCION");
});*/

//Obtiene la tecla presionada
/*window.addEventListener("keypress", function(event) {
    alert(String.fromCharCode(event.keyCode));
});*/

//------------------------------------------------------------------------

//EVENTO DE CARGA Y TEMPORIZADOR

/*

- Load
- Setinterval
- Settimeout 

*/

//Se puede poner cualquier funcion
/*window.addEventListener("load", function() {
    alert("YA CARGO");
});*/

/*var tiempo = setInterval(function() {
    document.write("TEXTO DE EJEMPLO <br>");
}, 2000);*/

/*setTimeout(function() {
    document.write("ES OTRO TEXTO");
}, 2000);*/

//------------------------------------------------------------------------

//EVENTOS MULTIMEDIA

/*
play
ended
seeking

en lugar de "play" se puede poner "ended" o "seeking".
*/
/*var primero = document.querySelector(".uno");

primero.addEventListener("seeking", function() {
    alert("Adelantaste" + this.currentTime);
});*/

//------------------------------------------------------------------------

//CUADROS DE DIÁLOGOS Y VENTANAS
/*
 - alert 
 - confirm 
 - prompt

en lugar de "Alert" se puede poner "Confirm" o "Prompt".
*/

var saludo = "Hola a todos";

//alert(saludo);
//var a = confirm("Necesita ayuda?");

/*if (a) {
    document.write("Dijo que SI");
} else {
    document.write("Dijo que NO");
}*/

/*if (a) {
    window.location = "ayuda.html";
}*/

/*var a = prompt("Nombre completo", "Nombre");

//document.write("Tu nombre es: "+a);

if (a) {
    document.write("Su nombre es: " + a);
} else if (a == null) {
    document.write("usted puso cancelar ");
} else {
    document.write("USTED NO PUSO NADA");
}*/

//------------------------------------------------------------------------
//TRABAJO CON NÚMEROS
/*

 - Number 
 - parseInt
 - parseFloat 
 - isNaN 
 - isInteger 
 - toFixed 
 - toString 

*/

/*var a = "10.55";

var b = Number(a);

document.write(typeof b);*/

/*var a = "10.55";

var b = parseInt(a);

document.write(b);*/

/*var a = "10.55";

var b = parseFloat(a);

document.write(b);*/

/*var a = "Hola";

var b = isNaN(a);

document.write(b);*/

/*var a = 15;

var b = Number.isInteger(a);

document.write(b);*/

/*var a = 15.9755651;

var b = a.toFixed(1);

document.write(b);*/

/*var a = 15;

var b = a.toString();

var c = 7;

document.write(typeof b);

document.write(b + c);*/

//----------------------------------------------------------------------
//TRABAJO CON CADENAS

/*

Contabilizar
----------------------
 - length (largo)


 Busqueda
 ---------------------
 - indexOf (donde comienza la palabra buscada)
 - search (Idem indexOf)
 - lastIndexOf (donde termina la palabra buscada, si hay dos iguales te devulve la posicion de la ultima)
 - match (Devuelve el resultado de la busqueda y los almacena dentro de un array)
 - Substr (Devuelve las palabras que se encuentran entre la posicion indicada y la cantidad de caracteres selecciondo Ejemplo: del 5 + 11 caracteres)
 - substring (Devuelve las palabras que se encuentran entre las posiciones indicadas Ejemplo: del 5 al 11)
 - charAt (Devuelve un caracter que se encuentra en el lugar dado)
 - startsWith (Devuelve un true o false si un texto comienza con la palabra indicada)
 - endsWith (Devuelve un true o false si un texto termina con la palabra indicada)
 - includes (Devuelve un true o false si la palabra o parte de ella es encontrada en un texto)
 
 
 ----------------------
 - repeat (Repite un texto la cantidad de veces indicada)
 - replace (Busca un palabra y la reemplaza por otra)
 - slice (Devuelve todo el texto seguido de la posicion indicada)
 - split (Convierte strings en arrays y dentro de la funcion se le pasa que los separa por ejemplo una "," o un espacio)
 - trim  (Borra los espacios de antes y despues de un texto)
 - toLowerCase (Pasa el texto a minuscula)
 - toUpperCase (Pasa el texto a mayuscula)
 - concat (Concatena variables o strings)
 - Variables incluidas (Variable dentro de un string)

*/

/*var a = "Hola a todos";

document.write(a.length);*/

/*var a = "Hola a todos mis amigos de youtube";

document.write(a.indexOf("amigos"));*/

/*var a = "Hola a todos mis amigos de youtube";

document.write(a.LastIndexOf("amigos"));*/

/*var a = "Hola a todos mis amigos de youtube, todos estamos alegres... todos";

document.write(a.match(/todos/gi));*/

/*var a = "Hola a todos mis amigos de youtube, todos estamos alegres... todos";

document.write(a.substr(5, 11));*/

/*var a = "Hola a todos mis amigos de youtube, todos estamos alegres... todos";

document.write(a.substring(5, 11));*/

/*var a = "Hola a todos mis amigos de youtube, todos estamos alegres... todos";

document.write(a.charAt(5));*/

/*var a = "Hola a todos mis amigos de youtube, todos estamos alegres... todos";

document.write(a.startsWith("Hola"));*/

/*var a = "Hola a todos mis amigos de youtube, todos estamos alegres... todos";

document.write(a.includes("amigos"));*/

/*var a = "Hola a todos mis amigos de youtube, todos estamos alegres... todos";

document.write(a.includes("amigos", 25));*/

/*var a = "Hola a todos <br>";

document.write(a.repeat(10));*/

/*var a = "Hola a todos <br>";

document.write(a.replace("todos", "mis amigos"));*/

/*var a = "Hola a todos <br>";

document.write(a.splice(5));*/

/*var a = "lunes,martes,miercoles,jueves";

console.log(a.splite(5))*/

/*var a = "       Hola a todos      ";

document.write(a.trim());*/

/*var a = "       HOLA A TODES    ";

document.write(a.toLowerCase());*/

/*var a = "hola a todos";

document.write(a.toUpperCase());*/

/*var a = "hola a todos";

document.write(a.toUpperCase());*/

/*var uno = "hola a todos ";
var dos = "mis amigos ";
var tres = "que ven mis videos";

document.write(uno.concat(dos, tres, "felices"));*/

/*var uno = "Youtube";

document.write(`Hola como andan todos mis amigos de ${uno}`);*/

//---------------------------------------------------------------------

//LOS ARREGLOS

/*

- Unidimensiones 
- Muldimencionales

*/

/*
//var semana = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes");

var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", 4433];

//document.write(semana);

document.write(semana[4]);*/

/*var uno = [
    [10, 20, 30, 40, 50],
    [11, 22, 33, 44, 55],
    [12, 24, 36, 48, 60]
];

var uno = [
    100, [10, 20, 30, 40, 50],
    [11, 22, 33, 44, 55],
    [12, 24, 36, 48, 60],
    200
];/var uno = [
    [10, 20, 30, 40, 50],
    [11, 22, 33, 44, 55],
    [12, 24, 36, 48, 60]
];

var uno = [
    [10, 20, 30, 40, 50, [9, 8, 7, 6, 5]],
    [11, 22, 33, 44, 55],
    [12, 24, 36, 48, 60]
];*/

//document.write(uno[0][5][3]);

//document.write(uno[0][0]);

//document.write(uno[0]);

//document.write(uno);

//---------------------------------------------------------------------

//TRABAJO CON ARREGLOS

/*

Modificaciones
----------------
 - Length (largo del arraay)
 - push (agrgegar variables al array)
 - pop (muestra la ultima posicion del array)
 - join (convierte un array a un string comun y corriente)
 - split (convierte un string en un array)
 - array.from y map (pasa codigo html a un array)
 - sort (ordena un array en forma alfabetica)
 - reverse (ordena los elementos al revez)


 --------------------
 - for in 
 - forEach 
 - find 
 - findIndex 
 - filter 
 - some 

*/

/*
var uno = [10, 20, 30, 40, 50];

document.write(uno.length);*/

/*var uno = [10, 20, 30, 40, 50];
uno.push(60);
uno.push(70);
uno.push(80);
uno.push(90);

document.write(uno);*/

/*var uno = [10, 20, 30, 40, 50];

document.write(uno.pop());*/

/*var uno = [10, 20, 30, 40, 50];

uno.join();

document.write(typeof uno);

console.log(uno);*/

/*var uno = "Lunes,Martes,Miercoles";

var dos = uno.split(",");

console.log(uno);*/

/*var semana = Array.from(document.querySelectorAll(".dias p"));

var creacion = semana.map(dia => dia.textContent);

console.log(creacion);*/

/*var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

document.write(semana.sort());*/

/*var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

document.write(semana.reverse());*/

/*var uno = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

for (let i in uno) {
    document.write(uno[i] + "<br>");
}*/

/*var uno = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

uno.forEach((dos, i) => document.write(i + " - " + dos + "<br>"));*/

/*var uno = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

var buscar = uno.find(dos => dos == "Martes");

document.write(buscar);*/

/*var uno = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

var buscar = uno.findIndex(dos => dos == "Martes");

document.write(buscar);*/

/*var uno = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

var buscar = uno.findIndex(dos => dos == "Martes");

document.write(buscar);*/

/*var uno = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Martes"];

var buscar = uno.filter(dos => dos == "Martes");

document.write(buscar);*/

/*var uno = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var buscar = uno.some(dos => dos < 10);

document.write(buscar);*/

//---------------------------------------------------------------------

//TRABAJO CON ARREGLOS

// CLASES Y OBJETOS
/*

- Propiedades y métodos
 - Clases 
 - Objetos
 - Instanciación 
 - Herencia 
 
 */

//Metdologia antigua de Objeto en JavaScript

//Clase
/*function Gatos(nombre, edad, peso) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;

    this.correr = function() {
        document.write("El gato corre");
    };
}

//Objeto
var gato1 = new Gatos("Peludo", 4, 3);
var gato2 = new Gatos("Mancha", 7, 4);

document.write(gato1.nombre);
gato1.correr();*/

//---------------------------------------------------------------------
/*class Gato {
    constructor(nombre, edad, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }

    correr() {
        document.write("El gato ", nombre, "corre");
    }
}

var gato1 = new Gatos("Peludo", 4, 3);
var gato2 = new Gatos("Mancha", 7, 4);

gato1.correr();*/

//------------------------------------------------------------------------

/*class Animal {
    constructor(tipo, raza) {
        this.cero = tipo;
        this.raza = raza;
    }
}

class Domesticos extends Animal {
    constructor(cero, nombre, edad, peso) {
        super(cero);
        this.uno = nombre;
        this.dos = edad;
        this.tres = peso;
    }
}

var animal1 = new Domesticos("Hogar", "Boby", 8, 6);

var animal2 = new Domesticos("Caza", "Jorge", 9, 5);

var unico = new Animal("Salvaje", "pura");

document.write(unico.cero);*/

//------------------------------------------------------------------------

//MANEJO DEL BOM

/*
 - Propiedades window 
 - Métodos window
 - Frames
 - History 
 - Location 
 - Navegator
 - Screen 
*/

//Propiedades WINDOW

/*window.name = "ESTE ES UN NOMBRE LA VENTANA";

var dato = "el nombre es: " + window.name + "<br>";

var ancho = "El ancho es: " + window.outerWidth + "<br>";

var alto = "El alto es: " + window.outerHeight + "<br>";

var anchoInterno = "El ancho interno es: " + window.innerWidth + "<br>";

var altoInterno = "El alto interno es: " + window.innerHeight + "<br>";

var scrollHorizontal =
    "El scroll Horizontal es: " + window.pageXOffset + "<br>";

var scrollVertical = "El scroll Vertical es: " + window.pageYOffset + "<br>";

var distanciaIzquierda =
    "La distancia desde la izquierda es: " + window.screenX + "<br>";

var distanciaSuperior =
    "La distancia desde el superior es: " + window.screenY + "<br>";

document.write(
    dato,
    ancho,
    alto,
    anchoInterno,
    altoInterno,
    scrollHorizontal,
    scrollVertical,
    distanciaIzquierda,
    distanciaSuperior
);*/

//Metodos WINDOW
/*var ventana;

function visitar() {
    ventana = window.open("ayuda.html", "_blank", "width=500 , height=300");
}

function cerrar() {
    ventana.window.close();
}

function dimension() {
    //ventana.resizeBy(100, 100);
    //ventana.resizeTo(500, 500);
    //ventana.moveBy(500, 500);
    //ventana.moveTo(500, 5000);
    //ventana.focus();
    ventana.print();
}*/

//FRAMES

//alert("cantidad de frames utilizados: " + window.length);
/*
var historial = window.history;
console.log(historial);

var localizacion = window.location;
document.write(localizacion);

var navegador = window.navigator.vendor;
document.write("<br> El navegador utilizado es: " + navegador);

var navegador = window.navigator;
console.log(navegador);

var pantalla = window.screen;
console.log(pantalla);
*/


//------------------------------------------------------------------------

//MANEJO DEL DOM

/*
 - querySelector 
 - getElement 
 - Modificar contenido html
 - Modificar propiedades html
 - Modificar estilos css

*/


/*var a = document.querySelector(".primero");

a.style.color = "blue";*/

/*var a = document.querySelector("#dos")

a.style.color = "red";*/

/*var a = document.querySelector("#todo");

a.style.color = "blue";*/

/*var a = document.querySelector("h1");

a.style.color = "red";*/

/*var a = document.querySelector(".ultima h1");

a.style.color = "red";*/

/*var a = document.querySelector("a[class='vinculo']");

a.style.color = "green";*/

/*var a = document.querySelectorAll("p")[2];

a.style.color = "red";*/


/*var a = document.getElementById("uno");

a.style.color = "red";*/

/*var a = document.getElementsByClassName("primero")[0];

a.style.color = "red";*/


/*var a = document.getElementsByTagName("p")[0];

a.style.color = "red";*/

/*var a = document.getElementsByTagName("p")[0];

a.innerHTML = "Nuevo texto";*/


/*var a = document.getElementsByTagName("p")[0];

a.innerHTML += " <p> +  Nuevo texto</p>";*/


/*var a = document.getElementsByClassName("primero")[0];

a.className = a.className.replace("primero", "nueva");*/


/*var a = document.getElementsByClassName("primero")[0];

a.style.color = "green";
a.style.border = "1px solid red";

a.style.fontFamily = "Arial";

a.style.fontSize = "45px";*/

var a = document.getElementById("todo");

function fondo(color) {
    if (color == "rojo") {
        a.style.backgroundColor = "red";
        a.style.color = "white";
    } else if (color == "verde") {
        a.style.backgroundColor = "green";
    } else if (color == "azul") {
        a.style.backgroundColor = "blue";
    }

}