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


/*let productoA = {
    nombre:"Buho",
    precio:100,
    stock:30
}

let productoB = {
    nombre:"Cuenco",
    precio:200,
    stock:30
}

let productoC = {
    nombre:"Florero",
    precio:300,
    stock:50
}

let productoD ={
    nombre:"Mate",
    precio:150,
    stock:60
}
let productoE = {
    nombre:"Tazavintage",
    precio:500,
    stock:15
}*/

function Productos(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.restarStock = function(cantidad){
        this.stock += cantidad
    }
    this.sumarStock = function(cantidad){
    this.stock += cantidad
    }

}

let productoA = new Productos ("buho",100,30);
let productoB = new Productos ("cuenco",200,30);
let productoC = new Productos ("florero",300,50);
let productoD = new Productos ("mate",150,60);
let productoE = new Productos ("tazavintage",500,15);


let listaProductos = [productoA, productoB, productoC, productoD, productoE]


let precioTotal = 0

let nombre = prompt("Ingrese su nombre: ")

let catalogo = document.getElementById("catalogo")

catalogo.innerText = "Bienvenido " + nombre 


catalogo.innerText = ( "Estos son nuestros productos: \n - Buho\n - Cuenco\n - Florero\n - Mate\n - Tazavintage")


  
let cantidadCompra = prompt ( "que cantidad de productos distintos quiere comprar")

for( let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt (" Ingrese que producto quiere comprar : \n - Buho\n - Cuenco\n - Florero\n - Mate\n - Tazavintage\n - ESC ")


    if(productoCompra.toLowerCase() == "buho"){
        let cantidadproductoA = prompt ("ingrese que cantidad de " + productoA.nombre + " desea comprar:")  
        precioTotal = cantidadproductoA * productoA["precio"]
        
        if (validarStock(cantidadproductoA, productoA.stock)){
            precioTotal = cantidadproductoA * productoA["precio"]
            productoA.stock = productoA.stock - cantidadproductoA
        } else {
            alert ( "No hay stock suficiente del producto")
        }
        console.log(productoA.stock)

    } else if (productoCompra.toLowerCase() == "cuenco"){
        let cantidadproductoB = prompt (" ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        precioTotal = cantidadproductoB * productoB["precio"]
        
        console.log(productoB.stock)

    } else if(productoCompra.toLowerCase() == "florero"){
        let cantidadproductoC = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        precioTotal = cantidadproductoC * productoC["precio"]

        console.log(productoC.stock)
    
    } else if(productoCompra.toLocaleLowerCase() == "mate"){
        let cantidadproductoD = prompt(" ingrese que cantidad de " + productoD.nombre + " desea comprar:")
        precioTotal = cantidadproductoD * productoD["precio"]

        console.log(productoD.stock)


    } else if(productoCompra.toLocaleLowerCase() == "tazavintage"){
        let cantidadproductoE= prompt(" ingrese que cantidad de " + productoE.nombre + " desea comprar:")
        precioTotal = cantidadproductoE * productoE["precio"] 
    }  

        console.log(productoE.stock)
    
}

    alert ("El precio total es: " + "$" + precioTotal + " Gracias por su compra")

function validarStock (stockProductoA,cantidadproductoA) {
    if(cantidadproductoA <= productoA.stock) {
        return true
    }
        
    return false
} 


/*prompt( nombreProductoA + ":" + "$" + precioProductoA + " El stock es:" + stockProductoA + "  /  " + nombreProductoB + ":" + "$" + precioProductoB + " El stock es:" + stockProductoB + " / "
 + nombreProductoC + ":" + "$" + precioProductoC + " El stock es:" + stockProductoC +" / "+ 
 nombreProductoD + ":" + "$" + precioProductoD + "El stock es :" + stockProductoD + " / " + nombreProductoE + ":" + "$" + precioProductoE + "El stock es :" + stockProductoE)

                                                                        

 alert( "Acepte si quiere comprar: " + nombreProductoA + " / " + nombreProductoB + " / " + nombreProductoC + " / " + nombreProductoD + " / " + nombreProductoE )

 let cantidadProductoA = prompt( "ingrese que cantidad de " + nombreProductoA + " desea comprar:")
let cantidadProductoB = prompt ("ingrese que cantidad de " + nombreProductoB + " desea comprar:")
let cantidadProductoC = prompt ("ingrese que cantidad de " + nombreProductoC + " desea comprar")
let cantidadProductoD = prompt ("ingrese que cantidad de" + nombreProductoD + " desea comprar")
let cantidadProductoE = prompt ("ingrese que cantidad de" + nombreProductoE + " desea comprar") 


let precioTotalA = cantidadProductoA * precioProductoA
let precioTotalB = cantidadProductoB * precioProductoB
let precioTotalC = cantidadProductoC * precioProductoC
let precioTotalD = cantidadProductoD * precioProductoD
let precioTotalE = cantidadProductoE * precioProductoE


let precioTotal = precioTotalA + precioTotalB 

stockProductoA = stockProductoA - cantidadProductoA
stockProductoB = stockProductoB - cantidadProductoB
stockProductoC = stockProductoC - cantidadProductoC 

alert ( "El precio total es : " + precioTotal)

console.log("Ahora el stock de: " + nombreProductoA + " es: " + stockProductoA)
console.log("Ahora el stock de: " + nombreProductoB + " es: " + stockProductoB)


alert("Su compra se a realizado con exito")

console.log(precioTotal)*/






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
