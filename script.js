const productoInput = document.getElementById('nombre-producto');
const precioInput = document.getElementById('precio-producto');
const agregarButton = document.getElementById('btn-agregar-producto');
const listaVentas = document.getElementById('lista-ventas');
const totalVentas = document.getElementById('total-ventas');

let total = 0;

agregarButton.addEventListener('click', () => {
    const producto = productoInput.value;
    const precio = parseFloat(precioInput.value);
    const cantidad = 1;

    total += precio;

    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${producto}</td>
        <td>$${precio.toFixed(2)}</td>
        <td>${cantidad}</td>
        <td>$${precio.toFixed(2)}</td>
    `;

    listaVentas.appendChild(fila);

    productoInput.value = '';
    precioInput.value = '';

    totalVentas.textContent = `$${total.toFixed(2)}`;
});