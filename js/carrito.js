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
        <span class= 'restar'> ➖ </span>
        <p> Cantidad:${producto.cantidad}</p>
        <span class= 'sumar'> ➕ </span>
        <p> Total:$${producto.cantidad * producto.precio}</p>
		`
		modalContainer.append(carritoContent)

        //Agregar o restar la cantidad de un mismo producto
        let restar = carritoContent.querySelector('.restar')

        restar.addEventListener('click',() =>{
            if(producto.cantidad !== 1){
                producto.cantidad--
            }
            localStor()
            pintarCarrito()
        })

        let sumar = carritoContent.querySelector('.sumar')

        sumar.addEventListener('click',() =>{
                producto.cantidad++

            localStor()
            pintarCarrito()
        })

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
    localStor()
    pintarCarrito()
}

/* ***********************CONTADOR CARRITO************* */

const carritoCounter = () => {
    contadorCarrito.style.display ='block'

    const carritoLength = carrito.length

    localStorage.setItem('carritoLength', JSON.stringify(carritoLength))

    contadorCarrito.innerText = JSON.parse(localStorage.getItem('carritoLength'))
}

carritoCounter()