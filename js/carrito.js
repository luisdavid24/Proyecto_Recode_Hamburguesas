import { menuHamburguesas } from "../config/global.js"

let precioTotal = 0;


function modificarTexto(texto){
  let nuevoTexto = texto.replace(/ +/g, '_');
  let textoSinTildes = nuevoTexto.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
  return textoSinTildes;

}

modificarTexto("como estas canción")
function nombre(menuHamburguesas){
    var allburgers=""
    menuHamburguesas.map(burger=>{
      precioTotal+=burger.precio
      let imageBurger = `img/`
      imageBurger += modificarTexto(burger.nombre)
        imageBurger+=".png"
        console.log(imageBurger)
      let card = ` <div class="cards">
      <img src=${imageBurger} alt="">
      <div class="card-content">
        <h1>${burger.nombre}</h1>
        <h4>${burger.precio}</h4>
        <p>${burger.descripcion}</p >
      </div>
      </div>`
      allburgers+= card
    })
  
      document.getElementById("contenedor").innerHTML=allburgers
}
nombre(menuHamburguesas)

console.log(menuHamburguesas)
  
function total(sumarPrecio){
  burger.precio.map(sumarPrecio)
}

