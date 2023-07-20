/* *********CLASE PRODUCTO ************/

class Producto{
    constructor (nombre , codigo, precio,stock){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.stock = stock;
    }
}
/***********PRODUCTOS*************** */

const productosTienda = [
    {nombre: 'Té rojo', codigo: 'TR', precio: 1000, stock: 3},
    {nombre: 'Té verde', codigo: 'TR', precio: 1000, stock: 3},
    {nombre: 'Té negro', codigo: 'TR', precio: 1000, stock: 3},
    {nombre: 'Té de manzanilla', codigo: 'TR', precio: 1000, stock: 3},
    {nombre: 'Té de menta', codigo: 'TR', precio: 1000, stock: 3},

]

/************** CARGAR DOM **************/

const productos = JSON.parse(localStorage.getItem('productos'))
let carrito = JSON.parse(localStorage.getItem('carrito'))
const pedido = JSON.parse(localStorage.getItem('pedido'))

/* *********AGREGAR PRODUCTO AL CARRITO******* */

const agregarProducto = ({nombre,codigo,preio,stock})=>{
    if(Producto.codigo === codigo ){

    }else {
        const nuevoProducto = new Producto(nombre,codigo,precio,stock)
        productos.push(nuevoProducto)
        localStorage.setItem('productos',JSON.stringify(productos))
    }
}

/*************** TOTAL CARRITO **************/

const carritoTotal = ()=> {
    let total = carrito.reduce((acumulador,{precio,cantidad})=>{
        return acumulador + (precio*cantidad)
    },0)
    return total
}
const carritoTotalRender = ()=>{
    const totalCarrito = document.getElementById('totalCarrito')
    totalCarrito.innerHTML = `Precio Total:$ ${carritoTotal}`
}

const agregarCarrito = (objetoCarrito)=>{
    carrito.push(objetoCarrito)
    carritoTotalRender()
}








