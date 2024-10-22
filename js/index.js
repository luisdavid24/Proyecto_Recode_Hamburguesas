import { menuHamburguesas } from '../config/global.js';

const menu = document.querySelector('#menu');

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");
const img7 = document.querySelector(".img7");
const img8 = document.querySelector(".img8");

menuHamburguesas.map(element => {
    const box = document.createElement('div');
    box.classList.add('product');

    if (element.nombre === "Hamburguesa Clásica"){
        box.appendChild(img1);
    }
     if ((element.nombre === "Hamburguesa BBQ")) {
      box.appendChild(img2);
    }
    else if ((element.nombre === "Hamburguesa Doble")) {
      box.appendChild(img3);
    }
    else if ((element.nombre === "Hamburguesa Vegetariana")) {
      box.appendChild(img4);
    }
    else if ((element.nombre === "Hamburguesa Picante")) {
      box.appendChild(img5);
    }
    else if ((element.nombre === "Hamburguesa Deluxe")) {
      box.appendChild(img6);
    }
    else if ((element.nombre === "Hamburguesa Mediterránea")) {
      box.appendChild(img7);
    }
    else if ((element.nombre === "Hamburguesa de Pescado")) {
      box.appendChild(img8);
    }
    const name = document.createElement('h2');
    name.textContent = element.nombre;

    const description = document.createElement('p');
    description.textContent = element.descripcion;

    const price = document.createElement('p');
    price.textContent = element.precio;

    const extras = document.createElement('ul');
    element.adicionales.map(adicional => {
        const li = document.createElement('li');
        li.style.listStyle = ('none')
        li.textContent = adicional;
        extras.appendChild(li);
    });

    box.appendChild(name);
    box.appendChild(description);
    box.appendChild(price);
    box.appendChild(extras);

        
        
    menu.appendChild(box);
});