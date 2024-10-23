import { menuHamburguesas } from "../config/global.js"




function nombre(menuHamburguesas){
    var allburgers=""
    menuHamburguesas.map(burger=>{
          let card = ` <div class="cards">
      <img src="img/Hamburgesa_BBQ.png" alt="">
      <div class="card-content">
        <h1>${burger.nombre}</h1>
        <h4>${burger.precio}</h4>
        <p>${burger.descripcion}</p >
      </div>`
      allburgers+= card
    })
  
      document.getElementById("contenedor").outerHTML=allburgers
}
nombre(menuHamburguesas)

console.log(menuHamburguesas)