const verCarrito = document.getElementById('Carrito')

/* **************VER COMPRA REALIZADA**************** */

const pintarCarrito = () => {
	modalContainer.innerHTML = ''
    modalContainer.style.display = 'flex'
    const modalHeader = document.createElement('div')
	modalHeader.className = 'modal-header'
	modalHeader.innerHTML = `
	    <h1 class= 'modal-header-tittle'>Tu compra</h1>
	`
	modalContainer.append(modalHeader)

	const modalbutton = document.createElement('h1')
	modalbutton.innerText = 'x'
	modalbutton.className = 'modal-header-button'

	modalbutton.addEventListener('click', () => {
		modalContainer.style.display = 'none'
	})

	modalHeader.append(modalbutton)

	carrito.forEach((producto) => {
        let carritoContent = document.createElement('div')
	    carrito.className = 'modal-content'
		carrito.innerHTML = `
        <img src= '${productos.img}'>
		<h3>${producto.nombre}</h3>
		<p> $${producto.precio}</p>
        <p> Cantidad:${producto.cantidad}</p>
        <p> Total:$${producto.cantidad * producto.precio}</p>
		`
		modalContainer.append(carritoContent)

        //Boton para eliminar el producto

        let eliminar = document.createElement('span')
        eliminar.innerText = `❌`
        eliminar.className = 'eliminar-producto'
        carritoContent.append(eliminar)

        eliminar.addEventListener('click', eliminarProducto)
	})

	
	const total = carrito.reduce ((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0)

	const totalCompra = document.createElement('div')
	totalCompra.className = 'total-content'
	totalCompra.innerHTML = `Total: $${total}`
	modalContainer.append(totalCompra)

}

verCarrito.addEventListener('click', pintarCarrito)

const eliminarProducto = () => {
    const encontrarId = carrito.find((element) => element.id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== encontrarId
    
    })

    carritoCounter()
    pintarCarrito()
}

/* ***********************CONTADOR CARRITO************* */

const carritoCounter = () => {
    contadorCarrito.style.display ='block'
    contadorCarrito.innerText = carrito.length
}