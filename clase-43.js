const productos = ["Celular", "Cartera", "Taza", "Vaso", "Florero"];
let accion = prompt("Que accion queres realizar en tu carrito de compras?");
let seleccion = prompt("Qué producto?"); 


// siempre con FOR
//if (accion === "BORRAR") {
// el usuario indica que producto quiere borrar, y lo eliminamos// luego mostramos EN CONSOLA el carrito}

//if (accion === "EDITAR") {// el usuario indica que producto quiere editar, y lo editamos
// luego mostramos EN CONSOLA el carrito}
//if (accion === "AGREGAR") {
// el usuario indica que producto quiere agregar, y lo agregamos
// luego mostramos EN CONSOLA el carrito}
console.log(productos)

for (let i = 0; i < productos.length; i++) {
if(accion === "Borrar"){
    if(seleccion === productos[i]){
        productos.splice(i, 1);
    }
}
}
console.log(productos)

for (let i = 0; i < productos.length; i++) {
    if(accion === "Modificar"){
        if(seleccion === productos[i]){    
        let nuevoProducto = prompt("Qué producto queres agregar?")    
        productos.splice(i, 1, nuevoProducto);
    }
}
}

console.log(productos)


    if(accion === "Agregar"){
        productos.push(seleccion);
}


console.log(productos)

//MALE

const alumnasOnline = [ 
    ["Maria", "Abihaggle", 23],
    ["Noe", "Potrero", 32],
    ["Sol", "Alvarez", 26],
  ];
  
  // alta baja modificacion 
  
  let accion = prompt("Por favor, indique que accion desea tomar");
  
  if (accion === "BORRAR") {
    let usuarioABorrar = prompt("Indique que usuario desea borrar")
   
    for (let i = 0; i < alumnasOnline.length; i++) {
      for (let j = 0; j < alumnasOnline[i].length; j++) {
        
        if (alumnasOnline[i][j] === usuarioABorrar) {
          alumnasOnline.splice(i, 1);
          alert("Hemos borrado al usuario identificado como" + usuarioABorrar)
        }
        
      }
    }
    console.log(alumnasOnline)
  };
  
  if (accion === "EDITAR") {
    let usuarioAEditar = prompt("Indique que dato desea editar")
  
    for (let i = 0; i < alumnasOnline.length; i++) {
      for (let j = 0; j < alumnasOnline[i].length; j++) {
        
        if (alumnasOnline[i][j] === usuarioAEditar) {
          let datoAModificar = prompt("Por cual dato queres modificarlo?")
          alumnasOnline[i][j] = datoAModificar;
        }
      }
    }
  }
  
  /*if (accion === "AGREGAR") {
    let usuarioAAgregar = prompt("Indique que dato desea agregar")
  
    for (let i = 0; i < alumnasOnline.length; i++) {
      for (let j = 0; j < alumnasOnline[i].length; j++) {
        
        if (alumnasOnline[i][j] === usuarioAAgregar) {
          let datoAModificar = prompt("Por cual dato queres modificarlo?")
          alumnasOnline[i][j] = datoAModificar;
        }
      }
    }
  }
  
  console.log(alumnasOnline)*/