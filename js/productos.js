/*  Productos de la página con sus propiedades */
// Imágenes sacadas de Unsplash (https://unsplash.com/es) para mantener la calidad

 
 const productos = [
	{nombre:'Auriculares',id:'AUR01', cantidad:1, precio: 30000,stock:5,img:'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Reloj', id:'R01', cantidad:1, precio: 35000, stock:6,img:'https://images.unsplash.com/photo-1616928231359-fc8b7e244c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Smartwatch', id:'SM01', cantidad:1, precio: 60000, stock:6,img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Notebook', id:'NOT01', cantidad:1, precio: 120000, stock:3,img:'https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Teclado', id:'TCL01', cantidad:1, precio: 25000, stock:7,img:'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Mouse', id:'MOU01',cantidad:1, precio: 10000, stock:10,img:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Micrófono', id:'MICL01', cantidad:1, precio: 15000, stock:7,img:'https://images.unsplash.com/photo-1585102651425-8caf7848e44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Auriculares inalámbricos', id:'AUR02', cantidad:1, precio: 20000, stock:9,img:'https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Tablet', id:'TAB01', cantidad:1, precio: 85000, stock:8,img:'https://images.unsplash.com/photo-1589739900266-43b2843f4c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=581&q=60',},
	{nombre:'Cargador inalámbrico', id:'CAR01', cantidad:1, precio: 50000, stock:12,img:'https://images.unsplash.com/photo-1545235616-db3cd822ad8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
	{nombre:'Celular', id:'CEL01', cantidad:1, precio: 300000, stock:16,img:'https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',},
    {nombre:'Porta Notebook', id:'POR01', cantidad:1, precio: 40000, stock:16,img:'https://images.unsplash.com/photo-1508014938279-b7418e08350c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80',}
	
] 