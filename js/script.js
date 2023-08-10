

/* *********CLASES ******************/

/*  class Producto {
	constructor(nombre,id,precio,stock){
		this.nombre = nombre;
		this.id = id;
		this.precio = precio;
		this.stock = stock;
	}
} 

class Usuario {
	constructor(nombre,correo,telefono,compra){
		this.nombre = nombre;
		this.correo = correo;
		this.telefono = telefono;
		this.compra = compra;
	}
} 
 */


let carrito = []




/* ******* RENDERIZADO DE PRODUCTOS **********/

const shopContent = document.getElementById('shopContent')

const verCarrito = document.getElementById('verCarrito')

productos.forEach((producto) => {
    let contenedor = document.createElement('div')
	contenedor.className = 'card'
	contenedor.innerHTML = `
	<img src='${producto.img}'>
	<h3>${producto.nombre}</h3>
	<p class= 'precio'>${producto.precio}</p>
	`

	shopContent.append(contenedor)

	let botonComprar = document.createElement('button')
	botonComprar.innerText = 'Agregar'
	botonComprar.className = 'agregar'

	contenedor.append(botonComprar)

	botonComprar.addEventListener('click', () => {
        carrito.push({
			nombre: producto.nombre,
			precio: producto.precio,
		})
	
	})

	
})

verCarrito.addEventListener('click', () => {


})















































/* const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
/* const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product'); */

// Lista de todos los contenedores de productos
/* const productsList = document.querySelector('.container-items'); */

// Variable de arreglos de Productos
/* let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
}); */

// Funcion para mostrar  HTML
/* const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
}; */ 