let botones = document.getElementsByTagName("button");
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
        let clase = mostrar.className + " show active";
        mostrar.setAttribute("class", clase);
      } else {
        botones[i].ariaSelected = false;
        let ocultar = document.getElementById(botones[i].id.slice(0, -4));
        ocultar.setAttribute("class", "tab-pane fade");
      }
    }
  }
}
