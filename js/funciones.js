let botones = document.getElementsByTagName("button");
let seleccionado = document.getElementById("nav-inicio");
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", activar);
}

function activar() {
  for (let i = 0; i < botones.length; i++) {
    if (botones[i].id != "menu") {
      if (botones[i].id == this.id) {
        botones[i].ariaSelected = true;
        let id = botones[i].id;
        let mostrar = document.getElementById(id.slice(0, -4));
        let clase = mostrar.className + " active show";
        mostrar.setAttribute("class", clase);
        seleccionado.setAttribute("class", seleccionado.className.slice(0, -12));
        seleccionado = mostrar;
      } else {
        botones[i].ariaSelected = false;
      }
    }
  }
}
