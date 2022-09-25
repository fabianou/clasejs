/*let nombreProducto

nombreProducto = "taza"

const altura = 1.79

let numeroA = 5
let numeroB = 10

let resultado = numeroA + numeroB

console.log(resultado)

let texto = "Hola"
let texto2 = "Mundo"
let espacio = " "

let texto3 = texto + espacio + texto2

console.log (texto3)

let union = numeroA + texto

console.log(union)

let num1 = texto  
let num2 = 3

let num3 = num1 - num2 

console.log(num3)*/

let mensajeSaludar = "Bienvenido"

saludar("Fabian")


alert( "Ingrese que producto quiere comprar")
 

let nombreProductoA = "taza"
let precioProductoA = 100
let stockProductoA = 30

let nombreProductoB = "plato"
let precioProductoB = 200 
let stockProductoB = 30 

prompt(nombreProductoA + ":" + "$" + precioProductoA + " El stock es:" + stockProductoA + "  /  " + nombreProductoB + ":" + "$" + precioProductoB + " El stock es:" + stockProductoB)

 alert( "Acepte si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

 let cantidadProductoA = prompt( "ingrese que cantidad de " + nombreProductoA + " desea comprar:")
let  cantidadProductoB = prompt ("ingrese que cantidad de " + nombreProductoB + " desea comprar:")

let precioTotalA = cantidadProductoA * precioProductoA
let precioTotalB = cantidadProductoB * precioProductoB

let precioTotal = precioTotalA + precioTotalB 

stockProductoA = stockProductoA - cantidadProductoA
stockProductoB = stockProductoB - cantidadProductoB

alert ( "El precio total es : " + precioTotal)

console.log("Ahora el stock de: " + nombreProductoA + " es: " + stockProductoA)
console.log("Ahora el stock de: " + nombreProductoB + " es: " + stockProductoB)

alert( "Gracias por su compra")

console.log(precioTotal)

function saludar(nombre) {
    alert(mensajeSaludar + " " + nombre)
}




/*let verdadero = true 
let esfalso = false 

let numero = prompt("Ingrese un numero:")

if(numero > 5 ){
    console.log("el numero es mayor")
}
    console.log ("este es el final")
*/

/*let texto = prompt (" Ingrese SI para comprar \nIngrese NO para salir")

if( texto == "SI"){

    alert("Gracias por su respuesta")
}
else{
alert("Gracias vuelve pronto")

}
console.log ("gracias vuelva pronto")

*/

/*for( let i = 1 ; i <= 10; i = i + 1){
    alert( "El numero es el : " + i)

console.log ("final")
}*/

/*let entrada = prompt ( " 1 - cuentas\n2 - cajero\n3 - contador\n ESC - Salir")



while(entrada != "ESC"){
alert("el usuario ingreso "+ entrada);

entrada = prompt( "1 - cuentas\2 - cajero\3 - contador\ ESC - salir");

console.log( "final")
}*/
