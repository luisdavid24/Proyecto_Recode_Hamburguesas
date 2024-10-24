import { adicionales } from '../config/global.js';

const container = document.getElementById('extras-container');
const agregadosContainer = document.getElementById('extras-agregados-container');
const totalPrecioSpan = document.getElementById('total-precio');
let extrasAgregados = [];

function mostrarAdicionales() {
  adicionales.map((adicional, index) => {
    const extraDiv = document.createElement('div');
    extraDiv.classList.add('extra-item');
    
    extraDiv.innerHTML = `
      <h3>${adicional.nombre}</h3>
      <p>Precio: $${adicional.precio.toFixed(2)}</p>
      <p>Cantidad disponible: <span id="cantidad-${index}">${adicional.cantidad}</span></p>
      <button id="agregar-${index}" class="agregar-btn">Agregar</button>
    `;

    container.appendChild(extraDiv);

    document.getElementById(`agregar-${index}`).addEventListener('click', () => {
      agregarExtra(index);
    });
  });
}

function agregarExtra(index) {
  const extra = adicionales[index];

  if (extra.cantidad > 0) {
    extra.cantidad--;
    document.getElementById(`cantidad-${index}`).innerText = extra.cantidad;
    
    const extraExistente = extrasAgregados.find(item => item.nombre === extra.nombre);

    if (extraExistente) {
      extraExistente.cantidad++;
    } else {
      extrasAgregados.push({ ...extra, cantidad: 1 });
    }

    mostrarExtrasAgregados();
    calcularTotal();
  } else {
    alert('No hay más cantidad disponible de este extra.');
  }
}

function eliminarExtra(nombre) {
  // Encontrar el extra en el arreglo de agregados
  const extraIndex = extrasAgregados.findIndex(item => item.nombre === nombre);
  if (extraIndex === -1) return;

  // Encontrar el extra en el arreglo original para restaurar su cantidad
  const originalExtra = adicionales.find(item => item.nombre === nombre);
  const originalIndex = adicionales.findIndex(item => item.nombre === nombre);

  if (extrasAgregados[extraIndex].cantidad > 1) {
    // Si hay más de uno, solo reducir la cantidad
    extrasAgregados[extraIndex].cantidad--;
    originalExtra.cantidad++;
  } else {
    // Si solo hay uno, eliminar el elemento completamente
    extrasAgregados.splice(extraIndex, 1);
    originalExtra.cantidad++;
  }

  // Actualizar la cantidad mostrada en el elemento original
  document.getElementById(`cantidad-${originalIndex}`).innerText = originalExtra.cantidad;

  mostrarExtrasAgregados();
  calcularTotal();
}

function mostrarExtrasAgregados() {
  agregadosContainer.innerHTML = '';

  extrasAgregados.map((extraAgregado) => {
    const extraDiv = document.createElement('div');
    extraDiv.classList.add('extra-agregado-item');

    extraDiv.innerHTML = `
      <h4>${extraAgregado.nombre}</h4>
      <p>Precio: $${extraAgregado.precio.toFixed(2)}</p>
      <p>Cantidad en el carrito: ${extraAgregado.cantidad}</p>
      <button class="eliminar-btn" data-nombre="${extraAgregado.nombre}">
        <span class="eliminar-icon">×</span>
        Eliminar
      </button>
    `;

    // Agregar evento al botón de eliminar
    const eliminarBtn = extraDiv.querySelector('.eliminar-btn');
    eliminarBtn.addEventListener('click', () => {
      eliminarExtra(extraAgregado.nombre);
    });

    agregadosContainer.appendChild(extraDiv);
  });
}

function calcularTotal() {
  const total = extrasAgregados.reduce((acc, extra) => acc + (extra.precio * extra.cantidad), 0);
  totalPrecioSpan.innerText = total.toFixed(2);
}

mostrarAdicionales();