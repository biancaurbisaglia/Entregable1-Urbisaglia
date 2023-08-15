
/* HACE VISIBLE EL CARRITO */

const mostrarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Tu compra</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    //Muestra de la compra 
    carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio} </p>
        <span class="restar"> ➖ </span>

        <p>${product.cantidad}</p>
        <span class="sumar"> ➕ </span>
          <p>Total: $${product.cantidad * product.precio} </p>
        <span class="delete-product"> ❌ </span>
        `;

    modalContainer.append(carritoContent);

    //Resta cantidad
    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
        if (product.cantidad !== 1) {
        product.cantidad--;
        }
        saveLocal();
        mostrarCarrito();
    });

    //Suma cantidad
    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
        product.cantidad++;
        saveLocal();
        mostrarCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
        eliminarProducto(product.id);
    });

    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("button");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Comprar: $${total} `;
    modalContainer.append(totalBuying);

    document.getElementsByClassName("total-content")[0].addEventListener("click",pagarTotal)
};


verCarrito.addEventListener("click", mostrarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    console.log(foundId);

    carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
    });

    carritoContador();
    saveLocal();
    mostrarCarrito();
};

const carritoContador = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoContador();

function pagarTotal(){
    let mensaje = document.getElementById("modal-container");
    mensaje.innerHTML = `<p class= "mensaje"> Muchas gracias por su compra😄</p>`

}
