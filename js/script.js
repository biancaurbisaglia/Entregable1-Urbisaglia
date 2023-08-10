

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

/* *********PRODUCTOS ******************/

const productos = [
	{nombre:'Auriculares',id:'AUR01', precio: 30000,stock:5,img:'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=384&q=80',},
	{nombre:'Reloj', id:'R01', precio: 35000, stock:6,img:'https://images.unsplash.com/photo-1616928231359-fc8b7e244c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',},
	{nombre:'Smartwatch', id:'SM01', precio: 60000, stock:6,img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',},
	{nombre:'Notebook', id:'NOT01', precio: 120000, stock:3,img:'https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',},
	{nombre:'Teclado', id:'TCL01', precio: 25000, stock:7,img:'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',},
	{nombre:'Mouse', id:'MOU01', precio: 10000, stock:10,img:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80',},
	{nombre:'Micrófono', id:'MICL01', precio: 15000, stock:7,img:'https://images.unsplash.com/photo-1585102651425-8caf7848e44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Auriculares inalambricos', id:'AUR02', precio: 20000, stock:9,img:'https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',},
	{nombre:'Tablet', id:'TAB01', precio: 85000, stock:8,img:'https://images.unsplash.com/photo-1589739900266-43b2843f4c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',},
	{nombre:'Cargador inalambrico', id:'CAR01', precio: 50000, stock:12,img:'https://images.unsplash.com/photo-1545235616-db3cd822ad8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',},
	
	
]

let carrito = []


const shopContent = document.getElementById('shopContent')


productos.forEach((producto) => {
    let contenedor = document.createElement('div')
	contenedor.innerHTML = `
	<img src='${producto.img}'>
	<h3>${producto.nombre}</h3>
	<p>${producto.precio}</p>
	`

	shopContent.append(contenedor)

	let comprar = document.createElement('button')
	comprar.innerText = 'Agregar'

	shopContent.append(comprar)
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