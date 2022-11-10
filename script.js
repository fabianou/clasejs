Swal.fire('Bienvenido a tienda artesanal Vera,pulsa ok para comenzar tu compra')


const listaDeProductos = []

let productosCarrito = []
let cartList = document.getElementById('carrito')
let catalogoProductos = document.getElementById('catalogo-productos')
let totalValue = document.getElementById('total')

let botonVaciar = document.getElementById('boton-vaciar')
botonVaciar.addEventListener('click', vaciarCarrito)


fetch("productos.json")
    .then(respuesta => respuesta.json())
    .then(listaProductos => 
        listaProductos.forEach(producto => {
            listaDeProductos.push(producto)

            let card = document.createElement('div')
            card.classList.add('card', 'col-sm-4')

            let cardHeader = document.createElement('div')
            cardHeader.classList.add('card-header')
            cardHeader.innerText = `$${producto.precio}`

            let imagen = document.createElement('img')
            imagen.classList.add('card-img-top')
            imagen.setAttribute('width', 300)
            imagen.setAttribute('height', 300)
            imagen.setAttribute('src', '/images/' + producto.imagen)

            let cardBody = document.createElement("div")
            cardBody.classList.add('card-body')

            let cardTitle = document.createElement("h2")
            cardTitle.classList.add('card-title')
            cardTitle.innerText = producto.nombre

            let cardDescription = document.createElement("p")
            cardDescription.classList.add('card-text')
            cardDescription.innerText = producto.descripcion

            let cardButton = document.createElement("button")
            cardButton.classList.add('btn', 'btn-primary')
            cardButton.innerText = `Agregar al carrito de la tienda`
            cardButton.setAttribute('mark', producto.id)
            cardButton.setAttribute('nombre-producto', producto.nombre)
            cardButton.addEventListener('click', agregarProductoAlCarrito)

            cardBody.append(cardTitle)
            cardBody.append(cardDescription)
            cardBody.append(cardButton)

            card.append(cardHeader)
            card.append(imagen)
            card.append(cardBody)

            catalogoProductos.append(card)
        }));

cargarCarritoDeCompras()

function cargarCarritoDeCompras(){

    cartList.innerHTML = ''

    let cartWithoutRepeatedElements = [...new Set(productosCarrito)]

    cartWithoutRepeatedElements.forEach((itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        let quantity = productosCarrito.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)
    

        let linea = document.createElement('li')
        linea.classList.add('list-group-item', 'text-right', 'mx-2')
        linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

        let buttonDelete = document.createElement('button')
        buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
        buttonDelete.innerText = 'X'
        buttonDelete.dataset.item = itemId
        buttonDelete.addEventListener('click', eliminarProducto)

        linea.append(buttonDelete)
        cartList.append(linea)
    })

    totalValue.innerText = calcularPrecioTotal()
}        

function agregarProductoAlCarrito(event){
    let id = event.target.getAttribute('mark')
    let nombre = event.target.getAttribute('nombre-producto')
    productosCarrito.push(id)
    cargarCarritoDeCompras()

    Toastify({
        text: `Agregaste correctamente el producto a la tienda: ${nombre} al carrito`,
        className: "info",
        duration: 4000,
        gravity: 'bottom'
        }).showToast();
}        

function calcularPrecioTotal(){
    return productosCarrito.reduce((total, itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })

        return total + item[0].precio
    }, 0)
}

function eliminarProducto(event){
    Swal.fire({
        title: 'Estas seguro de que queres eliminar este producto?',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `Cancelar`
      }).then((result) => {
        if (result.isConfirmed) {
            let id = event.target.dataset.item
            cart = cart.filter((cartId) => {
                return cartId != id
    })
            rendercart()
          Swal.fire('Eliminado', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se elimino el producto', '', 'info')
        }
      })
    
   }
   

function vaciarCarrito(){
    productosCarrito = []
    cartList.innerHTML = ''
    totalValue.innerText = 0
}   

