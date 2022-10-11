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




let nombreProductoA = "Buho"
let precioProductoA = 100
let stockProductoA = 30


let nombreProductoB = "Cuenco"
let precioProductoB = 200 
let stockProductoB = 30


let nombreProductoC = "Florero"
let precioProductoC = 300
let stockProductoC =  50


let nombreProductoD = "Mate"
let precioProductoD = 150
let stockProductoD = 60


let nombreProductoE = "Tazavintage"
let precioProductoE = 500
let stockProductoE = 15

let precioTotal = 0

let nombre = prompt("Ingrese su nombre: ")

let catalogo = document.getElementById("catalogo")

catalogo.innerText = "Bienvenido " + nombre 


alert ( "Estos son nuestros productos: \n - Buho\n - Cuenco\n - Florero\n - Mate\n - Tazavintage")
  
let cantidadCompra = prompt ( "que cantidad de productos distintos quiere comprar")

for( let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt (" Ingrese que producto quiere comprar : \n - Buho\n - Cuenco\n - Florero\n - Mate\n - Tazavintage\n - ESC ")


    if(productoCompra.toLowerCase() == "buho"){
        let cantidadProductoBuho = prompt ("ingrese que cantidad de " + nombreProductoA + " desea comprar:")  
        precioTotal = cantidadProductoBuho * precioProductoA
        
        if (validarStock(cantidadProductoBuho, stockProductoA)){
            precioTotal = cantidadProductoBuho * precioProductoA
            stockProductoA = stockProductoA - cantidadProductoBuho
        } else {
            alert ( "No hay stock suficiente del producto")
        }
        console.log(stockProductoA)

    } else if (productoCompra.toLowerCase() == "cuenco"){
        let cantidadProductoCuenco = prompt (" ingrese que cantidad de " + nombreProductoB + " desea comprar:")
        precioTotal = cantidadProductoCuenco * precioProductoB
        
        console.log(stockProductoB)

    } else if(productoCompra.toLowerCase() == "florero"){
        let cantidadProductoFlorero = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:")
        precioTotal = cantidadProductoFlorero * precioProductoC

        console.log(stockProductoC)
    
    } else if(productoCompra.toLocaleLowerCase() == "mate"){
        let cantidadProductoMate = prompt(" ingrese que cantidad de " + nombreProductoD + " desea comprar:")
        precioTotal = cantidadProductoMate * precioProductoD

        console.log(stockProductoD)


    } else if(productoCompra.toLocaleLowerCase() == "tazavintage"){
        let cantidadProductoTazavintage= prompt(" ingrese que cantidad de " + nombreProductoE + " desea comprar:")
        precioTotal = cantidadProductoTazavintage * precioProductoD 
    }  

        console.log(stockProductoE)
    
}

    alert ("El precio total es: " + "$" + precioTotal + " Gracias por su compra")

function validarStock(cantidadProducto, stockProducto) {
    if(cantidadProducto <= stockProducto) {
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
