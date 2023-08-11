/* Constantes y variables globales */

const shopContent = document.getElementById('shopContent')

const modalContainer = document.getElementById('modal-container')

const contadorCarrito = document.getElementById('contadorCarrito')

let carrito = JSON.parse(localStorage.getItem('carrito')) || []

const getProductos = async() => {
    const response = await fetch('data.json')
	const data = await response.json()

	data.forEach((producto) => {
		let contenedor = document.createElement('div')
		contenedor.className = 'card'
		contenedor.innerHTML = `
		<img src='${producto.img}'>
		<h3>${producto.nombre}</h3>
		<p class= 'precio'>$${producto.precio}</p>
		`
	
		shopContent.append(contenedor)
	
		let botonComprar = document.createElement('button')
		botonComprar.innerText = 'Agregar'
		botonComprar.className = 'agregar'
	
		contenedor.append(botonComprar)
	
		botonComprar.addEventListener('click', () => {
	
		//Identificar si ya existe el producto
		const repeat = carrito.some((productoRepetido) => productoRepetido.id === producto.id)
		
		if(repeat){
			carrito.map((prod) => {
				if (prod.id === producto.id){
					prod.cantidad++
			}
		})
		}else{
			carrito.push({
				id: producto.id,
				img: producto.img,
				nombre: producto.nombre,
				precio: producto.precio,
			})
	}
		console.log(carrito)
		carritoCounter()
		localStor()
		})
	})
	
}




/* *****************LOCAL STORAGE***************** */

//set item
const localStor = () => {
	localStorage.setItem('carrito',JSON.stringify(carrito))
}













































