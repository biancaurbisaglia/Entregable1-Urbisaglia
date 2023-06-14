/**
 * Logica para crear pedidos y cobrar los pedidos del usuario
 */


/*************Usuario******** */
const usuario = {
    nombre: 'Bianca',
    edad: 21,
    deuda: 0
}

let pedido = []
let costoPedido = 0

/**Bienvenida al Restaurante */
let nombre = prompt ('¿Cual es tu nombre?')
let bienvenida = alert(`Bienvenid@ ${nombre} al restaurante`)
let confirmacion = confirm('¿Quieres hacer un pedido por nuestra consola?')



//Lista todos los productos del menu en un formato amigable

const mostrarMenu = () => {
    console.log(`Codigo - Producto - Costo`) 
    
    for(let producto of productos ){
        console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo} `)
    }
}


//Pedimos los productos
const pedirProducto = cod => {
    if (!cod) return 'Ingrese un codigo valido'
        
    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    if (!productoEncontrado) return 'El producto no existe'

    pedido.push(productoEncontrado)
    console.log ('El producto ha sido agregado a su pedido. Su pedido es:')
    return verPedido ()
}


//Vemos el pedido
const verPedido = () => pedido 


//Calculamos el costo del pedido
const calcularCosto = () => {
    let costo = 0
    for (producto of pedido ){
        costo += producto.costo
    }
    costoPedido = costo
    return costoPedido
}


//Finalizamos pedido
const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `${usuario.nombre} , Tu debes pagar $${usuario.deuda} pesos. `

}


//Permite pagar todo un pedido y entrega cambio si es necesario
const pagarPedido = montoEntregado => {
    if (typeof montoEntregado === 'number'){
        if (montoEntregado < usuario.deuda){
        console.warn `No te alcanza para pagar tu pedido`
    } else if  (montoEntregado === usuario.deuda){
        usuario.deuda = 0
        return `Tu pedido ha sido pagado`
    } else {
        console.log(`Tu pedido ha sido pagado y tu cambio es de ${montoEntregado - usuario.deuda}`)
        usuario.deuda = 0
        return 'Deuda pagada'
        
    } 
    }else{
        return 'Dato incorrecto'
    }
}







